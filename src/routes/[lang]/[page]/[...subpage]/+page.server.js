import { getRentalCategoriesDetails,getRentalCategoryKeys, getTourByName } from '$lib/server/server-appwrite.js';

export async function load({ params }) {
	let lang = params.lang;
	let page = params.page;
	let subpage = params.subpage ?? [];
	if (page === 'tours' || page === 'wycieczki') {
		const tour = await getTourByName(lang, subpage);
		return {
			lang,
			page,
			subpage,
			tour: tour[0]
			// tour: {
			// 	title: 'Rowerowa Przygoda',
			// 	description: 'Opis wycieczki ...',
			// 	price: '130 zł',
			// 	distance: '15 km',
			// 	startTime: '10:00',
			// 	duration: '3h',
			// 	included: ['lokalny przewodnik', 'rower', 'kask', 'płaszcz przeciwdeszczowy', 'woda'],
			// 	address: 'ul. Chlebnicka 19/20, Gdańsk',
			// 	imageUrl: '/tour.avif',
			// }
		}
	}
	if (page === 'rentals' || page === 'wynajem') {
		const rental = await getRentalCategoriesDetails(lang, subpage);
		const uniqueCategoryKeys = await getRentalCategoryKeys(lang);
		return {
			lang, page, subpage, rental,
			uniqueCategoryKeys,
		}
	}
	return {
		lang,
		page,
		subpage
	};
};
