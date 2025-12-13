// import { redirect } from '@sveltejs/kit';

// const ALLOWED_LANGUAGES = ['pl', 'en'];
// const DEFAULT_LANGUAGE = 'en';

// export function load({ params }) {
// 	const lang = params.lang;

// 	if (!ALLOWED_LANGUAGES.includes(lang)) {
// 		throw redirect(307, `/`);
// 	}

// 	return {}
// }

export const load = async ({ params }) => {
	const lang = params.lang === 'en' ? 'en' : 'pl';

	const t = (await import(`$lib/i18n/${lang}.json`)).default;

	return {
		lang,
		t
	};
};
