<script>
  import { goto } from '$app/navigation';
  import { page } from '$app/state';
  import { getLocalizedPath, t } from '$lib/translations/helper.js';
  import { pathnames } from '$lib/translations/routes.js';
  import { locale } from 'svelte-i18n';

  let lang = $derived(page.params.lang || 'en');
  let toursPath = $derived(getLocalizedPath('/tours', lang));
  let rentalPath = $derived(getLocalizedPath('/rentals', lang));
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
    isOpen = !isOpen;
  }

  function findPathnameKey(currentPath, currentLang) {
    for (const [key, paths] of Object.entries(pathnames)) {
      if (paths[currentLang] === currentPath) return key;
    }
    return null;
  }

  function toggleLang() {
    const currentLang = lang;
    const newLang = currentLang === 'en' ? 'pl' : 'en';
    const currentPath = page.url.pathname;

    const pathnameKey = findPathnameKey(currentPath, currentLang);
    let newPath = pathnameKey
      ? getLocalizedPath(pathnameKey, newLang)
      : getLocalizedPath('/', newLang);

    const searchParams = page.url.search;
    if (searchParams) newPath += searchParams;

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

      <!-- LANGUAGE SWITCH -->
      <button
        class="-mt-10 flex items-center justify-center"
        aria-label="Language"
        onclick={toggleLang}
      >
        <div class="bg-orange flex h-22 w-12 items-end justify-center rounded-b-xl pb-3 shadow-md">
          <span class="text-size-14 font-bold text-white">{lang.toUpperCase()}</span>
        </div>
      </button>

      <!-- DESKTOP MENU -->
      <nav
        class="relative hidden h-[56px] items-end gap-2 pr-4 font-semibold tracking-wide text-white uppercase md:flex"
      >

        <!-- TOURS -->
        <a
          href={toursPath}
          class={`font-haboro-soft md:text-size-10 lg:text-size-14 relative flex h-full items-end px-6 transition ${
						isActivePath(toursPath) ? 'text-white' : 'text-white hover:text-orange-400'
					}` }
        >
          {#if isActivePath(toursPath)}
            <div
              class="hidden md:block absolute top-[8px] left-0 right-0 h-[65px] rounded-t-2xl border-t border-l border-r border-white"
            ></div>
          {/if}
          <span class="relative z-10 pb-2">{t('tours', lang)}</span>
        </a>

        <!-- RENTALS -->
        <a
          href={rentalPath}
          class={`font-haboro-soft md:text-size-10 lg:text-size-14 relative flex h-full items-end px-6 transition ${
						isActivePath(rentalPath) ? 'text-white' : 'text-white hover:text-orange-400'
					}` }
        >
          {#if isActivePath(rentalPath)}
            <div
              class="hidden md:block absolute top-[8px] left-0 right-0 h-[65px] rounded-t-2xl border-t border-l border-r border-white"
            ></div>
          {/if}
          <span class="relative z-10 pb-2">{t('rentals', lang)}</span>
        </a>

        <!-- ABOUT -->
        <a
          href={aboutPath}
          class={`font-haboro-soft md:text-size-10 lg:text-size-14 relative flex h-full items-end px-6 transition ${
						isActivePath(aboutPath) ? 'text-white' : 'text-white hover:text-orange-400'
					}` }
        >
          {#if isActivePath(aboutPath)}
            <div
              class="hidden md:block absolute top-[8px] left-0 right-0 h-[65px] rounded-t-2xl border-t border-l border-r border-white"
            ></div>
          {/if}
          <span class="relative z-10 pb-2">{t('about', lang)}</span>
        </a>

        <!-- BLOG -->
        <a
          href={blogPath}
          class={`font-haboro-soft md:text-size-10 lg:text-size-14 relative flex h-full items-end px-6 transition ${
						isActivePath(blogPath) ? 'text-white' : 'text-white hover:text-orange-400'
					}` }
        >
          {#if isActivePath(blogPath)}
            <div
              class="hidden md:block absolute top-[8px] left-0 right-0 h-[65px] rounded-t-2xl border-t border-l border-r border-white"
            ></div>
          {/if}
          <span class="relative z-10 pb-2">{t('blog', lang)}</span>
        </a>

        <!-- CONTACT -->
        <a
          href={contactPath}
          class={`font-haboro-soft md:text-size-10 lg:text-size-14 relative flex h-full items-end px-6 transition ${
						isActivePath(contactPath) ? 'text-white' : 'text-white hover:text-orange-400'
					}` }
        >
          {#if isActivePath(contactPath)}
            <div
              class="hidden md:block absolute top-[8px] left-0 right-0 h-[65px] rounded-t-2xl border-t border-l border-r border-white"
            ></div>
          {/if}
          <span class="relative z-10 pb-2">{t('contact', lang)}</span>
        </a>

      </nav>

    </div>

    <!-- MOBILE HAMBURGER -->
    <button class="flex items-center p-2 md:hidden" aria-label="Otwórz menu" onclick={openclose}>
      <svg class="h-12 w-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

  </div>

  <!-- MOBILE MENU -->
  {#if isOpen}
    <nav
      class="bg-blue absolute top-full left-0 z-50 flex w-full flex-col gap-4 px-6 py-8 text-lg font-semibold text-white shadow-lg md:hidden"
    >
      <a href={toursPath} class="transition hover:text-orange-400" onclick={openclose}>{t('tours', lang)}</a>
      <a href={rentalPath} class="transition hover:text-orange-400" onclick={openclose}>{t('rentals', lang)}</a>
      <a href={aboutPath} class="transition hover:text-orange-400" onclick={openclose}>{t('about', lang)}</a>
      <a href={blogPath} class="transition hover:text-orange-400" onclick={openclose}>{t('blog', lang)}</a>
      <a href={contactPath} class="transition hover:text-orange-400" onclick={openclose}>{t('contact', lang)}</a>
    </nav>
  {/if}
</header>
