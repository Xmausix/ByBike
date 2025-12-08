<script>
	import { goto } from '$app/navigation';
	import { t } from 'svelte-i18n';
	import { getLocalizedPath } from '$lib/translations/helper.js';
	let { tabs, rental, lang } = $props();
	let activeTab = $state(null);
	let path = getLocalizedPath('/rentals', lang);
	if (rental?.name && Array.isArray(tabs)) {
		const matchedCategory = tabs.find((cat) =>
			rental.name.toLowerCase().includes(cat.toLowerCase())
		);
		if (matchedCategory) {
			activeTab = matchedCategory;
		}
	}

	function selectTab(key) {
		activeTab = key;
		goto(`${path}/${key}`);
	}
</script>

<div
	class="border-blue relative mx-auto flex max-w-7xl justify-center gap-2 rounded-b-full border border-t-transparent bg-[#f8fbff] px-2 pt-3 sm:gap-4 md:gap-10 lg:gap-20"
>
	{#each tabs as key}
		<div class="relative">
			{#if activeTab === key}
				<div class="bg-greyish absolute right-0 -bottom-[1px] left-0 z-20 h-[1px]"></div>
			{/if}

			<button
				class="font-haboro-soft text-size-14 relative z-10 rounded-t-xl px-3 py-2 text-sm font-bold tracking-wide uppercase transition
                    {activeTab === key
					? 'text-blue border-blue bg-greyish border-t border-r border-l'
					: 'text-blue hover:text-orange-500'}"
				onclick={() => selectTab(key)}
			>
				{key}
			</button>
		</div>
	{/each}
</div>
