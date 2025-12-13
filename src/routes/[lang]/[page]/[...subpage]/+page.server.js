import {
	getRentalCategoriesDetails,
	getRentalCategoryKeys,
	getTourByName
} from '$lib/server/server-appwrite.js';

export async function load({ params }) {
	const lang = params.lang;
	const page = params.page;
	const subpage = params.subpage ?? [];

	// --- TOURS ---
	if (page === 'tours' || page === 'wycieczki') {
		try {
			const tour = await getTourByName(lang, subpage);
			return {
				lang,
				page,
				subpage,
				tour: tour?.[0] ?? null
			};
		} catch (err) {
			console.error("❌ Błąd getTourByName:", err);
			return {
				lang,
				page,
				subpage,
				tour: null,
				error: "Nie znaleziono wycieczki."
			};
		}
	}

	// --- RENTALS ---
	if (page === 'rentals' || page === 'wynajem') {
		try {
			const rental = await getRentalCategoriesDetails(lang, subpage);
			const uniqueCategoryKeys = await getRentalCategoryKeys(lang);

			return {
				lang,
				page,
				subpage,
				rental: rental ?? [],
				uniqueCategoryKeys: uniqueCategoryKeys ?? []
			};
		} catch (err) {
			console.error(" Błąd RENTALS w Appwrite:", err);
			return {
				lang,
				page,
				subpage,
				rental: [],
				uniqueCategoryKeys: [],
				error: "Nie udało się pobrać danych o wypożyczalni."
			};
		}
	}

	// --- DEFAULT ---
	return {
		lang,
		page,
		subpage
	};
}
