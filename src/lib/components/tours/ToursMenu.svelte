<script>
	import { t } from 'svelte-i18n';
	import { goto } from '$app/navigation';
	import { getLocalizedPath } from '$lib/translations/helper.js';
	import { page } from '$app/state';

	let { categories, tour} = $props();
	let activeTab = $state('all');
	let lang = page.params.lang;
	// Ustawienie aktywnego taba na podstawie aktualnej wycieczki
	if (tour?.catID && Array.isArray(categories)) {
		const matchedCategory = categories.find((cat) => cat.id === tour.catID);
		if (matchedCategory) {
			activeTab = matchedCategory.key;
		}
	}

	const sortedCategories = [...categories].sort((a, b) => {
		if (a.key === 'all') return -1;
		if (b.key === 'all') return 1;
		return 0;
	});

	// Funkcja do nawigacji na główną stronę wycieczek z odpowiednim tabem
	function navigateToToursTab(key) {
		const toursPath = getLocalizedPath('/tours', lang);
		
		if (key === 'all') {
			// Dla 'all' przejdź bez parametru category
			goto(toursPath);
		} else {
			// Znajdź kategorię i użyj jej zlokalizowanej nazwy (lowercase)
			const category = categories.find(cat => cat.key === key);
			if (category) {
				const localizedName = (lang === 'pl' ? category.name_pl : category.name_en).toLowerCase();
				goto(`${toursPath}?category=${encodeURIComponent(localizedName)}`);
			}
		}
	}
</script>

<div
	class="border-blue relative mx-auto flex max-w-7xl justify-center gap-2 rounded-b-full border border-t-transparent bg-[#f8fbff] px-2 pt-3 sm:gap-4 md:gap-10 lg:gap-20"
>
	{#each sortedCategories as { key, name_pl, name_en, id }}
		<div class="relative">
			<!-- Maska ukrywająca dolną krawędź głównej ramki -->
			{#if activeTab === key}
				<div class="bg-greyish absolute right-0 -bottom-[1px] left-0 z-20 h-[1px]"></div>
			{/if}

			<button
				class={`font-haboro-soft relative z-10 px-3 py-2 text-xs md:text-lg font-bold tracking-wide uppercase transition
					${ 
						activeTab === key 
							? 'text-blue border-blue bg-greyish rounded-t-xl border-t border-r border-l' 
							: 'text-blue hover:text-orange-500' 
					} 
				`}
				onclick={() => navigateToToursTab(key)}
			>
				{$t(`tabs.${key}`)}
			</button>
		</div>
	{/each}
</div>