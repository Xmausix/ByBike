<script>
  import { t as t } from 'svelte-i18n';
  import { goto } from '$app/navigation';
  import { getLocalizedPath } from '$lib/translations/helper.js';

  let { categories, tour, lang } = $props();

  let activeTab = $state('all');

  if (tour?.catID && Array.isArray(categories)) {
    const matchedCategory = categories.find(cat => cat.id === tour.catID);
    if (matchedCategory) activeTab = matchedCategory.key;
  }

  const sortedCategories = [...categories].sort((a, b) => {
    if (a.key === 'all') return -1;
    if (b.key === 'all') return 1;
    return 0;
  });

  function navigateToToursTab(key) {
    const toursPath = getLocalizedPath('/tours', lang);

    if (key === 'all') {
      goto(toursPath);
    } else {
      const category = categories.find(cat => cat.key === key);
      if (category) {
        const localized = (lang === 'pl' ? category.name_pl : category.name_en).toLowerCase();
        goto(`${toursPath}?category=${encodeURIComponent(localized)}`);
      }
    }
  }
</script>

<div class="border-blue relative mx-auto flex max-w-7xl justify-center gap-2 rounded-b-full border border-t-transparent bg-[#f8fbff] px-2 pt-3 sm:gap-4 md:gap-10 lg:gap-20">
  {#each sortedCategories as { key }}
    <button
      class={`font-haboro-soft px-3 py-2 text-xs md:text-lg font-bold uppercase transition
				${activeTab === key
					? 'text-blue border-blue bg-greyish rounded-t-xl border-t border-r border-l'
					: 'text-blue hover:text-orange-500'
				}`}
      onclick={() => navigateToToursTab(key)}
    >
      {$t(`tabs.${key}`)}
    </button>
  {/each}
</div>
