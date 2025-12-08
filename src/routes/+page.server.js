

import { getBlogPostsWithImages } from '$lib/server/server-appwrite.js';

export async function load({ params }) {
	const lang = params.lang || 'en';
	const posts = await getBlogPostsWithImages(lang);

	return { posts, lang };
}