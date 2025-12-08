import { getBlogPostWithImages } from '$lib/server/server-appwrite.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const { lang, slug } = params;

	const post = await getBlogPostWithImages(lang, slug);
	if (!post) throw error(404, 'Post not found');

	return { post, lang };
}
