// [lang]/[page]/+layout.server.js
import { getTourCategories } from '$lib/server/server-appwrite';

export async function load({ params }) {
	const page = params.page;
	let categories = [];

	if (page === 'tours' || page === 'wycieczki') {
		try {
			categories = await getTourCategories();
		} catch (err) {
			console.error("Błąd podczas getTourCategories:", err);
			categories = [];
		}
	}

	return {
		categories
	};
}
