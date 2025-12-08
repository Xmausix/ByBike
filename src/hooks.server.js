// export async function handle({ event, resolve }) {
// 	const validLangs = ['pl', 'en'];
// 	const segments = event.url.pathname.split('/').filter(Boolean);

// 	if (segments.length > 0 && !validLangs.includes(segments[0])) {
// 		// np. /es/contact → redirect na /
// 		console.warn('[hooks] Nieprawidłowy lang, redirect na /');
// 		return Response.redirect(new URL('/', event.url), 307);
// 	}

// 	return resolve(event);
// }
