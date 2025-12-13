import { getPdfUrl } from '$lib/server/appwrite.js';
import {
	getRentalCategories,
	getSubpageData,
	getTourCategories,
	getTours
} from '$lib/server/server-appwrite';

export async function load({ params }) {
	const { lang, page } = params;

	if (page === "wycieczki" || page === "tours") {
		const categories = await getTourCategories();
		const tours = await getTours(lang);

		return {
			lang,
			page,
			categories,
			tours
		};
	}

	if (page === "rentals" || page === "wynajem") {
		const rentalCategories = await getRentalCategories(lang);

		return {
			lang,
			page,
			rentalCategories
		};
	}

	if (page === "o-nas" || page === "about") {
		const subpage = await getSubpageData(lang, "about");

		return {
			lang,
			page,
			subpage
		};
	}

	return { lang, page };
}
