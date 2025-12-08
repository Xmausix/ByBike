import adapter from '@sveltejs/adapter-vercel'; // ZMIANA TUTAJ
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			// Opcjonalne konfiguracje
			// runtime: 'edge',
			// split: true
		})
	}
};

export default config;