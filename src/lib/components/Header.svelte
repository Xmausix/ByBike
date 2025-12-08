<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { getLocalizedPath, t } from '$lib/translations/helper.js';
	import { pathnames } from '$lib/translations/routes.js';
	import { locale } from 'svelte-i18n';

	let lang = $derived(page.params.lang || 'en');
	let toursPath = $derived(getLocalizedPath('/tours', lang));
	let rentalPath = $derived(getLocalizedPath('/rentals', lang));
	// let eventsPath = $derived(getLocalizedPath('/events', lang));
	let aboutPath = $derived(getLocalizedPath('/about', lang));
	let blogPath = $derived(getLocalizedPath('/blog', lang));
	let contactPath = $derived(getLocalizedPath('/contact', lang));
	let homePath = $derived(getLocalizedPath('/', lang));

	let isOpen = $state(false);
	let currentPath = $derived(page.url.pathname);

	function isActivePath(path) {
			return currentPath.startsWith(path);

	}
	function openclose() {
		console.log('Function called!');
		isOpen = !isOpen;
		console.log('Menu toggled, isOpen:', isOpen);
	}

	// Funkcja do znajdowania klucza ścieżki na podstawie aktualnej ścieżki
	function findPathnameKey(currentPath, currentLang) {
		for (const [key, paths] of Object.entries(pathnames)) {
			if (paths[currentLang] === currentPath) {
				return key;
			}
		}
		return null;
	}

	// Funkcja do przełączania języka
	function toggleLang() {
		const currentLang = lang;
		const newLang = currentLang === 'en' ? 'pl' : 'en';
		const currentPath = page.url.pathname;

		// Znajdź klucz aktualnej ścieżki
		const pathnameKey = findPathnameKey(currentPath, currentLang);

		let newPath;
		if (pathnameKey) {
			// Użyj istniejącej funkcji getLocalizedPath
			newPath = getLocalizedPath(pathnameKey, newLang);
		} else {
			// Jeśli nie znaleziono, idź do strony głównej w nowym języku
			newPath = getLocalizedPath('/', newLang);
		}

		// Zachowaj query parameters jeśli istnieją
		const searchParams = page.url.search;
		if (searchParams) {
			newPath += searchParams;
		}
		// Nawiguj do nowej ścieżki
		goto(newPath);
		locale.set(newLang);
	}
</script>

<header class="bg-blue relative scroll-smooth px-6 py-4">
	<div class="mx-auto flex max-w-7xl items-center justify-between">
		<!-- LOGO -->
		<div class="flex items-start pl-2">
			<a href={homePath} aria-label="Gdańsk by Bike - Home">
				<enhanced:img
					src="../images/logo-header.svg"
					alt="Gdańsk by Bike"
					class="h-10 w-auto lg:h-14"
				/>
			</a>
		</div>
		<div class="relative flex items-center justify-between gap-10">
			<!-- Przycisk do zmiany języka -->
			<button
				class="-mt-10 flex items-center justify-center"
				aria-label="Language"
				onclick={toggleLang}
			>
				<div class="bg-orange flex h-22 w-12 items-end justify-center rounded-b-xl pb-3 shadow-md">
					<span class="text-size-14 font-bold text-white">{lang.toUpperCase()}</span>
				</div>
			</button>

			<!-- MENU desktop -->
			<nav
				class="relative hidden h-[56px] items-end gap-2 pr-4 font-semibold tracking-wide text-white uppercase md:flex"
			>
				<a
					href={toursPath}
					class={`font-haboro-soft md:text-size-10 lg:text-size-14 relative flex h-full items-end px-6 transition ${
						isActivePath(toursPath) ? 'text-white' : 'text-white hover:text-orange-400'
					}`}
				>
					{#if isActivePath(toursPath)}
						<div
	class="absolute top-[8px] left-0 right-0 h-[65px] rounded-t-2xl border-t border-l border-r border-white bg-transparent"
></div>

					{/if}
					<span class="relative z-10 pb-2">{t('tours', lang)}</span>
				</a>

				<a
					href={rentalPath}
					class={`font-haboro-soft md:text-size-10 lg:text-size-14 relative flex h-full items-end px-6 transition ${
						isActivePath(rentalPath) ? 'text-white' : 'text-white hover:text-orange-400'
					}`}
				>
					{#if isActivePath(rentalPath)}
					<div
	class="absolute top-[8px] left-0 right-0 h-[65px] rounded-t-2xl border-t border-l border-r border-white bg-transparent"
></div>
					{/if}
					<span class="relative z-10 pb-2">{t('rentals', lang)}</span>
				</a>

				<!-- <a
					href={eventsPath}
					class={`font-haboro-soft md:text-size-10 lg:text-size-14 relative flex h-full items-end px-6 transition ${
						isActivePath(eventsPath) ? 'text-white' : 'text-white hover:text-orange-400'
					}`}
				>
					{#if isActivePath(eventsPath)}
						<div
							class="absolute inset-0 top-[8px] h-[65px] rounded-t-2xl border border-t-white border-r-white border-l-white bg-transparent"
						></div>
					{/if}
					<span class="relative z-10 pb-2">{t('events', lang)}</span>
				</a> -->

				<a
					href={aboutPath}
					class={`font-haboro-soft md:text-size-10 lg:text-size-14 relative flex h-full items-end px-6 transition ${
						isActivePath(aboutPath) ? 'text-white' : 'text-white hover:text-orange-400'
					}`}
				>
					{#if isActivePath(aboutPath)}
						<div
	class="absolute top-[8px] left-0 right-0 h-[65px] rounded-t-2xl border-t border-l border-r border-white bg-transparent"
></div>
					{/if}
					<span class="relative z-10 pb-2">{t('about', lang)}</span>
				</a>

				<a
					href={blogPath}
					class={`font-haboro-soft md:text-size-10 lg:text-size-14 relative flex h-full items-end px-6 transition ${
						isActivePath(blogPath) ? 'text-white' : 'text-white hover:text-orange-400'
					}`}
				>
					{#if isActivePath(blogPath)}
						<div
	class="absolute top-[8px] left-0 right-0 h-[65px] rounded-t-2xl border-t border-l border-r border-white bg-transparent"
></div>
					{/if}
					<span class="relative z-10 pb-2">{t('blog', lang)}</span>
				</a>

				<a
					href={contactPath}
					class={`font-haboro-soft md:text-size-10 lg:text-size-14 relative flex h-full items-end px-6 transition ${
						isActivePath(contactPath) ? 'text-white' : 'text-white hover:text-orange-400'
					}`}
				>
					{#if isActivePath(contactPath)}
						<div
	class="absolute top-[8px] left-0 right-0 h-[65px] rounded-t-2xl border-t border-l border-r border-white bg-transparent"
></div>
					{/if}
					<span class="relative z-10 pb-2">{t('contact', lang)}</span>
				</a>
			</nav>
		</div>
		<!-- HAMBURGER mobile -->
		<button class="flex items-center p-2 md:hidden" aria-label="Otwórz menu" onclick={openclose}>
			<svg
				class="h-12 w-12 text-white"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				viewBox="0 0 24 24"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</button>
	</div>

	<!-- MENU MOBILE -->
	{#if isOpen}
		<nav
			class="bg-blue absolute top-full left-0 z-50 flex w-full flex-col gap-4 px-6 py-8 text-lg font-semibold text-white shadow-lg md:hidden"
		>
			<a href={getLocalizedPath('/tours', lang)} class="transition hover:text-orange-400" onclick={openclose}>{t('tours', lang)}</a
			>
			<a href={getLocalizedPath('/rentals', lang)}  class="transition hover:text-orange-400" onclick={openclose}>{t('rentals', lang)}</a>
			<!-- <a href="/wydarzenia" class="transition hover:text-orange-400" onclick={openclose}
				>Wydarzenia</a
			> -->
			<a href={getLocalizedPath('/about', lang)} class="transition hover:text-orange-400" onclick={openclose}>{t('about', lang)}</a>
			<a href={getLocalizedPath('/blog', lang)}  class="transition hover:text-orange-400" onclick={openclose}>{t('blog', lang)}</a>
			<a href={getLocalizedPath('/contact', lang)}  class="transition hover:text-orange-400" onclick={openclose}>{t('contact', lang)}</a>
		</nav>
	{/if}
</header>
