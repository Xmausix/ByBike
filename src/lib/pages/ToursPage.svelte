<script>
  import TourCard from '$lib/components/tours/TourCard.svelte';
  import { getLocalizedPath } from '$lib/translations/helper.js';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  // Dane przekazywane do komponentu
  const { categories, tours, lang } = $props();

  const path = getLocalizedPath('/tours', lang);

  /* ===============================
     DERIVED: mapy kategorii
  ================================= */

  const categoryDisplayMap = $derived(() => {
    if (!categories?.length) return {};
    return Object.fromEntries(
      categories.map((c) => [
        c.key,
        (lang === 'pl' ? c.name_pl : c.name_en).toUpperCase()
      ])
    );
  });

  const categoryUrlMap = $derived(() => {
    if (!categories?.length) return {};
    return Object.fromEntries(
      categories.map((c) => [
        c.key,
        lang === 'pl' ? c.name_pl : c.name_en
      ])
    );
  });

  const urlToCategoryMap = $derived(() => {
    if (!categories?.length) return {};
    return Object.fromEntries(
      categories.map((c) => [
        (lang === 'pl' ? c.name_pl : c.name_en).toLowerCase(),
        c.key
      ])
    );
  });

  // DERIVED: posortowane klucze kategorii
  const tabKeys = $derived(() => {
    if (!categories?.length) return [];
    const sorted = [...categories];
    sorted.sort((a, b) => (a.key === 'all' ? -1 : b.key === 'all' ? 1 : 0));
    return sorted.map((c) => c.key);
  });

  /* ===============================
      STATE aktywnego taba
  ================================= */

  let activeTab = $state('all');

  // DERIVED: filtrowanie wycieczek
  const filteredTours = $derived(() => {
    if (activeTab === 'all') return tours;
    return tours.filter((tour) => {
      const category = categories.find((c) => c.id === tour.catID);
      return category?.key === activeTab;
    });
  });

  /* ===============================
      EFFECT: reagowanie na zmiany w URL
  ================================= */

  $effect(() => {
    const categoryParam = $page.url.searchParams.get('category');

    if (categoryParam) {
      const key = urlToCategoryMap[categoryParam.toLowerCase()];
      if (key) {
        activeTab = key;
      } else {
        activeTab = 'all';
        const url = new URL($page.url);
        url.searchParams.delete('category');
        goto(url.toString(), { replaceState: true });
      }
    } else {
      activeTab = 'all';
    }
  });

  /* ===============================
     Funkcja zmiany taba + aktualizacja URL
  ================================= */

  function setTab(key) {
    activeTab = key;

    const url = new URL($page.url);

    if (key === 'all') {
      url.searchParams.delete('category');
    } else {
      const localized = categoryUrlMap[key];
      if (localized) {
        url.searchParams.set('category', localized.toLowerCase());
      }
    }

    goto(url.toString());
  }
</script>

<div>
  <!-- Hero -->
  <div class="relative mb-4 h-[200px] w-full overflow-hidden rounded-b-3xl md:mb-20 md:h-[400px]">
    <img
      src="/hero11280.avif"
      alt="Wycieczki"
      class="absolute inset-0 z-0 h-full w-full object-cover"
    />

    <div
      class="pointer-events-none absolute bottom-0 left-0 z-10 h-1/2 w-full"
      style="background: linear-gradient(to top, rgba(0,0,0,0.55), transparent); border-radius: 0 0 1.5rem 1.5rem;"
    ></div>

    <div class="relative z-20 flex h-full flex-col justify-end p-6 text-white md:p-10">
      <h2
        class="text-size-14 md:text-size-26 font-haboro-soft mb-6 leading-tight font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] md:ml-20 text-left"
      >
        Wycieczki do<br />najciekawszych miejsc
      </h2>

      <!-- Tabs -->
      <div class="absolute -bottom-2 left-0 z-30 flex w-full justify-center pb-2 md:gap-7">
        {#each tabKeys as key}
          <button
            class={`md:text-sm lg:text-size-14 rounded-t-[16px] px-2 py-2 text-xs font-semibold tracking-wide transition md:px-10
						${activeTab === key ? 'text-blue bg-greyish' : 'hover:text-blueish text-white'}
					`}
            onclick={() => setTab(key)}
          >
            {categoryDisplayMap[key]}
          </button>
        {/each}
      </div>
    </div>
  </div>

  <!-- Grid -->
  <div class="mx-1 grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
    {#each filteredTours as tour}
      <TourCard {tour} {lang} />
    {/each}
  </div>

  <!-- Image below -->
  <img src="/hero11280.avif" alt="Opis obrazka" class="mx-auto w-full max-w-4xl rounded-3xl" />

  <!-- Description section -->
  <div class="mx-auto flex max-w-7xl flex-col items-start justify-center lg:flex-row">
    <div class="flex flex-col items-center text-center lg:items-start lg:text-left">
      <img src="/fal-logo2.png" alt="Poland by Locals" class="mb-4 w-110" />
    </div>

    <div class="font-open-sans text-blue max-w-2xl space-y-3 text-xs font-light md:text-sm">
      <section
        class="text-blue font-open-sans mx-auto max-w-3xl px-4 py-10 text-justify text-xs leading-tight sm:px-6 md:text-lg"
      >
        <h2 class="text-blue font-haboro-soft mb-6 text-xl font-bold uppercase md:text-3xl">
          Poland by Locals
        </h2>

        <p class="mb-4">
          Jeśli szukasz innych sposobów na zwiedzanie Gdańska i Pomorza niż wycieczki rowerowe – poznaj
          Poland By Locals, lokalnego organizatora turystyki oferującego wycieczki po regionie.
        </p>

        <p class="mb-4">
          Poland By Locals organizuje
          <strong class="font-semibold">tematyczne wycieczki po Gdańsku i Trójmieście</strong> – szlakiem
          bursztynu, piwa, historii PRL, street artu oraz lokalnych tradycji – a także klasyczne trasy.
        </p>

        <p class="mb-4">
          Obsługujemy gości <strong class="font-semibold">indywidualnych i grupy</strong>, oferując także
          eventy firmowe i wycieczki do Malborka, na Kaszuby, Mierzeję Wiślaną i wiele innych miejsc.
        </p>

        <p class="mb-4">
          Odkrywaj <strong class="font-semibold">Gdańsk i Pomorze z lokalnymi przewodnikami</strong> —
          autentycznie z Poland By Locals!
        </p>
      </section>
    </div>
  </div>
</div>
