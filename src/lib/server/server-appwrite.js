// src/lib/server/server-appwrite.js - NAZWYWAJ GO INACZEJ, np. appwrite-server.js
import { Client, Databases, Storage, Query } from 'node-appwrite'; // TYLKO node-appwrite
import { env } from '$env/dynamic/private'; // ZMIENIONE
import { getPdfUrl, getPhoto } from '$lib/server/appwrite.js';
import slugify from 'slugify';

// Użyj dynamic env zamiast static
const APPWRITE_ENDPOINT = env?.APPWRITE_ENDPOINT || 'https://fra.cloud.appwrite.io/v1';
const APPWRITE_PROJECT = env?.APPWRITE_PROJECT || '6936d0610032b5f88dc6';
const APPWRITE_DATABASE_ID = env?.APPWRITE_DATABASE_ID || '6847042300036d416e14';
const APPWRITE_INFO_COLLECTION_ID = env?.APPWRITE_INFO_COLLECTION_ID || '68761de3003159878b97';
const APPWRITE_TOURS_COLLECTION_ID = env?.APPWRITE_TOURS_COLLECTION_ID || '68760df1002b2225f779';
const APPWRITE_BLOG_POST_COLLECTION_ID = env?.APPWRITE_BLOG_POST_COLLECTION_ID || '68761d49002c2cd0a947';
const APPWRITE_SUBPAGE_COLLECTION_ID = env?.APPWRITE_SUBPAGE_COLLECTION_ID || '68761c82002e4582bdc4';
const APPWRITE_TOUR_CATEGORIES_COLLECTION_ID = env?.APPWRITE_TOUR_CATEGORIES_COLLECTION_ID || '687611d4000b6afa7963';
const APPWRITE_API_KEY = env?.APPWRITE_API_KEY || 'your_api_key_here';
const APPWRITE_STORAGE_ID = env?.APPWRITE_STORAGE_ID || '6847044900100717f6e5';
const APPWRITE_RENTAL_CATEGORIES_COLLECTION_ID = env?.APPWRITE_RENTAL_CATEGORIES_COLLECTION_ID || '6876142d0037e76eb85b';

// DEBUG - pokaż wartości
console.log('📊 Server Appwrite Config:');
console.log('  Endpoint:', APPWRITE_ENDPOINT);
console.log('  Project:', APPWRITE_PROJECT?.substring(0, 10) + '...');

const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT)
    .setKey(APPWRITE_API_KEY);

const databases = new Databases(client);
const storage = new Storage(client);

export async function getData(collectionId, query) {
    try {
        const response = await databases.listDocuments(
            APPWRITE_DATABASE_ID,
            collectionId,
            query
        );

        return response.documents;
    } catch (error) {
        console.error('Błąd podczas pobierania danych:', error);
        return [];
    }
}
export async function getInfo() {
    const data = await getData(APPWRITE_INFO_COLLECTION_ID);

    if (!data || data.length === 0) return null;

    const doc = data[0];

    return {
        id: doc.$id,
        addressComp: doc.addressComp,
        addressFund: doc.addressFund,
        openHour: doc.openHour,
        phone: doc.phone,
        whatsAppNr: doc.whatsAppNr,
        nipVat: doc.nipVat,
        bankInfo: doc.bankInfo,
        mapLocation: doc.mapLocation
    };
}

export async function getBlogPostsWithImages(lang) {
    try {
        const rawPosts = await getData(APPWRITE_BLOG_POST_COLLECTION_ID, [Query.equal('lang', lang)]);

        const posts = await Promise.all(
            rawPosts.map(async (doc, idx) => {
                let imagePreviewUrl = null;

                if (doc.heroImageID) {
                    try {
                        imagePreviewUrl = await getPhoto(doc.heroImageID);
                    } catch (err) {
                        console.warn(`Błąd podczas pobierania zdjęcia dla post[${idx}]:`, err);
                    }
                }
                const rawContent = doc.content ?? [];
                const content = Array.isArray(rawContent)
                    ? rawContent.map((entry) => {
                        try {
                            return typeof entry === 'string' ? JSON.parse(entry) : entry;
                        } catch (err) {
                            console.warn('Nieprawidłowy JSON w content:', entry);
                            return null;
                        }
                    }).filter(Boolean)
                    : [];
                const firstText = Array.isArray(content) && content.length > 0
                    ? content[0].text ?? ''
                    : '';
                return {
                    id: doc.$id,
                    title: doc.title,
                    imageUrl: imagePreviewUrl,
                    text: firstText,
                };
            })
        );

        return posts;
    } catch (error) {
        console.error('Błąd getBlogPostsWithImages:', error);
        return [];
    }
}
export async function getBlogPostWithImages(lang, slug) {
    try {
        const allPosts = await getData(APPWRITE_BLOG_POST_COLLECTION_ID, [
            Query.equal('lang', lang)
        ]);

        if (!allPosts || allPosts.length === 0) return null;

        const matched = allPosts.find((doc) => {
            const postSlug = slugify(doc.title, {
                lower: true,
                strict: true,
                locale: 'pl'
            });
            return postSlug === slug;
        });

        if (!matched) return null;
        console.log('matched', matched);

        // Pobierz hero image
        let imagePreviewUrl = null;
        if (matched.heroImageID) {
            try {
                imagePreviewUrl = await getPhoto(matched.heroImageID);
            } catch (err) {
                console.warn(`Błąd przy getPhoto: ${err}`);
            }
        }

        // Parsuj sekcje i zamień imageID na imageUrl oraz imgIDs na imageUrls
        const sectionsRaw = typeof matched.content === 'string'
            ? JSON.parse(matched.content)
            : matched.content ?? [];

        const sections = await Promise.all(
            sectionsRaw.map(async (sectionString) => {
                // Parsuj JSON string jeśli to string
                let section;
                try {
                    section = typeof sectionString === 'string' ? JSON.parse(sectionString) : sectionString;
                } catch (err) {
                    console.warn('Błąd przy parsowaniu sekcji:', err);
                    return sectionString;
                }


                // Obsługa tablicy imgIDs (nowa funkcjonalność)
                if (section.imgIDs && Array.isArray(section.imgIDs)) {
                    try {
                        const imageUrls = await Promise.all(
                            section.imgIDs.map(async (imgId) => {
                                try {
                                    return await getPhoto(imgId);
                                } catch (err) {
                                    console.warn(`Błąd przy pobieraniu imgID ${imgId}:`, err);
                                    return null;
                                }
                            })
                        );

                        // Filtruj null wartości i dodaj do sekcji
                        section = {
                            ...section,
                            imageUrls: imageUrls.filter(Boolean)
                        };
                    } catch (err) {
                        console.warn(`Błąd przy przetwarzaniu imgIDs:`, err);
                    }
                }

                return section;
            })
        );

        return {
            id: matched.$id,
            title: matched.title,
            imageUrl: imagePreviewUrl,
            sections
        };
    } catch (error) {
        console.error('Błąd getBlogPostWithImages:', error);
        return null;
    }
}
// export async function getBlogPostWithImages(lang, slug) {
//     try {
//         const allPosts = await getData(APPWRITE_BLOG_POST_COLLECTION_ID, [
//             Query.equal('lang', lang)
//         ]);

//         if (!allPosts || allPosts.length === 0) return null;

//         const matched = allPosts.find((doc) => {
//             const postSlug = slugify(doc.title, {
//                 lower: true,
//                 strict: true,
//                 locale: 'pl'
//             });
//             return postSlug === slug;
//         });

//         if (!matched) return null;
//         console.log('matched', matched);
//         // Pobierz hero image
//         let imagePreviewUrl = null;
//         if (matched.heroImageID) {
//             try {
//                 imagePreviewUrl = await getPhoto(matched.heroImageID);
//             } catch (err) {
//                 console.warn(`Błąd przy getPhoto: ${err}`);
//             }
//         }

//         // Parsuj sekcje i zamień imageID na imageUrl
//         const sectionsRaw = typeof matched.content === 'string'
//             ? JSON.parse(matched.content)
//             : matched.content ?? [];

//         const sections = await Promise.all(
//             sectionsRaw.map(async (section) => {
//                 if (section.imageID) {
//                     try {
//                         const imageUrl = await getPhoto(section.imageID);
//                         return { ...section, imageUrl };
//                     } catch (err) {
//                         console.warn(`Błąd przy imageID w sekcji: ${err}`);
//                         return section;
//                     }
//                 }
//                 return section;
//             })
//         );

//         return {
//             id: matched.$id,
//             title: matched.title,
//             imageUrl: imagePreviewUrl,
//             sections
//         };
//     } catch (error) {
//         console.error('Błąd getBlogPostWithImages:', error);
//         return null;
//     }
// }

export async function getSubpageData(lang, name) {
    try {
        const subpageData = await getData(APPWRITE_SUBPAGE_COLLECTION_ID, [Query.equal('lang', lang), Query.equal('idStrony', name)]);

        const posts = await Promise.all(
            subpageData.map(async (doc, idx) => {
                let imagePreviewUrl = null;
                let foundationStatusFileURL = null;
                let foundationFinFileURL = null;
                if (doc.imgID) {
                    try {
                        imagePreviewUrl = await getPhoto(doc.imgID);
                    } catch (err) {
                        console.warn(`Błąd podczas pobierania zdjęcia dla podstrony[${doc.name}]:`, err);
                    }
                }
                if (doc.foundationStatusFileID) {
                    try {
                        foundationStatusFileURL = await getPdfUrl(doc.foundationStatusFileID);
                    } catch (err) {
                        console.warn(`Błąd podczas pobierania foundationStatusFileURL dla podstrony[${doc.name}]:`, err);
                    }
                }
                if (doc.foundationFinFileID) {
                    try {
                        foundationFinFileURL = await getPdfUrl(doc.foundationFinFileID);
                    } catch (err) {
                        console.warn(`Błąd podczas pobierania foundationFinFileURL dla podstrony[${doc.name}]:`, err);
                    }
                }
                return {
                    id: doc.$id,
                    idStrony: doc.idStrony,
                    textAbout: doc.textAbout,
                    textFoundation_1: doc.textFoundation_1,
                    textFoundation_2: doc.textFoundation_2,
                    imagePreviewUrl,
                    foundationStatusFileURL,
                    foundationFinFileURL
                };
            })
        );

        return posts;
    } catch (error) {
        console.error('Błąd getSubpageData:', error);
        return [];
    }
}
export async function getTourCategories() {
    const data = await getData(APPWRITE_TOUR_CATEGORIES_COLLECTION_ID);

    if (!data || data.length === 0) return [];

    return data.map(doc => ({
        id: doc.$id,
        name_pl: doc.name_pl,
        name_en: doc.name_en,
        key: doc.key
    }));
}

export async function getTourByName(lang, name) {
    const data = await getData(APPWRITE_TOURS_COLLECTION_ID, [Query.equal('lang', lang), Query.equal('name', name)]);

    if (!data || data.length === 0) return [];

    const tours = await Promise.all(
        data.map(async (doc, idx) => {
            let galleryUrls = [];

            if (Array.isArray(doc.gallery)) {
                galleryUrls = await Promise.all(
                    doc.gallery.map(async (imageId, i) => {
                        try {
                            return await getPhoto(imageId);
                        } catch (err) {
                            console.warn(`Błąd podczas pobierania zdjęcia [${i}] w tour[${idx}]:`, err);
                            return null;
                        }
                    })
                );
            }
            return {
                id: doc.$id,
                lang: doc.lang,
                catID: doc.catID,
                name: doc.name,
                tagLine: doc.tagLine,
                heroLine: doc.heroLine,
                description: doc.description,
                price: doc.price,
                address: doc.address,
                duration: doc.duration,
                start: doc.start,
                distance: doc.distance,
                extras: doc.extras,
                mapLocation: doc.mapLocation,
                gallery: galleryUrls.filter(Boolean),
                fareHarborUrl: doc.fareHarborCode,
                showInMainPage: doc.showInMainPage
            };
        })
    );

    return tours;
}
export async function getTours(lang) {
    const data = await getData(APPWRITE_TOURS_COLLECTION_ID, [Query.equal('lang', lang)]);

    if (!data || data.length === 0) return [];

    const tours = await Promise.all(
        data.map(async (doc, idx) => {
            let galleryUrl = null;

            if (Array.isArray(doc.gallery) && doc.gallery.length > 0) {
                try {
                    galleryUrl = await getPhoto(doc.gallery[0]);
                } catch (err) {
                    console.warn(`Błąd podczas pobierania zdjęcia [0] w tour[${idx}]:`, err);
                }
            }

            return {
                id: doc.$id,
                lang: doc.lang,
                catID: doc.catID,
                name: doc.name,
                tagLine: doc.tagLine,
                price: doc.price,
                duration: doc.duration,
                start: doc.start,
                distance: doc.distance,
                gallery: galleryUrl
            };
        })
    );

    return tours;
}
// export async function resolveImages({ content, heroImageID }, storage, bucketId) {
//     // resolve heroImageID
//     const heroImagePreview = heroImageID
//         ? storage.getFilePreview(bucketId, heroImageID).href
//         : null;

//     // resolve slides in content
//     const resolvedContent = await Promise.all(
//         content.map(async (section) => {
//             if (!section.slide || !section.slides) return section;

//             const resolvedSlides = await Promise.all(
//                 section.slides.map(async (slide) => {
//                     const preview = storage.getFilePreview(bucketId, slide.imageUrl); // imageUrl = fileID
//                     return {
//                         ...slide,
//                         imageUrl: preview.href,
//                     };
//                 })
//             );

//             return {
//                 ...section,
//                 slides: resolvedSlides,
//             };
//         })
//     );

//     return {
//         heroImageURL: heroImagePreview,
//         content: resolvedContent,
//     };
// }
export async function getRentalCategories(lang) {
    const data = await getData(APPWRITE_RENTAL_CATEGORIES_COLLECTION_ID, [
        Query.equal('lang', lang)
    ]);

    if (!data || data.length === 0) return [];

    const categories = await Promise.all(
        data.map(async (doc, idx) => {
            let imageUrl = null;

            if (Array.isArray(doc.gallery) && doc.gallery.length > 0) {
                try {
                    imageUrl = await getPhoto(doc.gallery[0]);
                } catch (err) {
                    console.warn(`Błąd podczas pobierania zdjęcia w rental[${idx}]:`, err);
                }
            }

            return {
                id: doc.$id,
                name: doc.name,
                tagLine: doc.tagLine,
                imageUrl,
                categoryKey: doc.categoryKey,
                price: doc.price
            };
        })
    );

    return categories;
}

export async function getRentalCategoriesDetails(lang, categoryKey) {
    const data = await getData(APPWRITE_RENTAL_CATEGORIES_COLLECTION_ID, [
        Query.equal('lang', lang),
        Query.equal('categoryKey', categoryKey)
    ]);
    if (!data || data.length === 0) return null;

    const doc = data[0];

    return {
        id: doc.$id,
        name: doc.name,
        tagLine: doc.tagLine,
        heroLine: doc.heroLine,
        address: doc.address,
        lang: doc.lang,
        extras: doc.extras ?? [],
        gallery: doc.gallery ?? [],
        mapLocation: doc.mapLocation,
        fareHarborUrl: doc.fareHarborCode,
        stripeProductID: doc.stripeProductID,
        stripePriceID: doc.stripePriceID,
        showInCheckout: doc.showInCheckout ?? false,
        showInMainPage: doc.showInMainPage ?? false,
        rules: doc.rules,
        collectionText: doc.collectionText,
        dropOffText: doc.dropOffText,
        byOnWebsite: doc.byOnWebsite ?? true,
        price: doc.price
    };
}
export async function getRentalCategoryKeys(lang) {
    const data = await getData(APPWRITE_RENTAL_CATEGORIES_COLLECTION_ID, [
        Query.equal('lang', lang)
    ]);

    if (!data || data.length === 0) return [];

    return data.map(doc => doc.categoryKey);
}
export async function getElementById(id) {
    try {
        const response = await databases.getDocument(
            APPWRITE_DATABASE_ID,
            collectionId,
            id
        );

        return response.documents;
    } catch (error) {
        console.error('Błąd podczas pobierania danych:', error);
        return [];
    }
}