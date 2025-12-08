import { getData } from '$lib/server/server-appwrite.js';
import { getPhoto } from '$lib/server/appwrite.js';
import { Query } from 'node-appwrite';
import { APPWRITE_BLOG_POST_COLLECTION_ID } from '$env/static/private';
import { getBlogPostsWithImages } from '$lib/server/server-appwrite.js';

export async function load({ params }) {
	const lang = params.lang || 'en';
	const posts = await getBlogPostsWithImages(lang);

	return { posts, lang };
}
