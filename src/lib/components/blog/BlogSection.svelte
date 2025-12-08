<script>
	import { page } from '$app/state';
	import { getLocalizedPath } from '$lib/translations/helper';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';
	import { goto } from '$app/navigation';

	let { section } = $props();
	let lang = page.params?.lang || 'pl';

	let localizedPath = section.button ? getLocalizedPath(section.button.href, lang) : null;

	const options = { loop: true };
	const plugins = [Autoplay({ delay: 4000 })];

	let emblaApi;
	let selectedIndex = $state(0);
	let scrollSnaps = $state([]);

	function handleCTAClick(link) {
		goto(link);
	}

	function scrollPrev() {
		if (emblaApi) emblaApi.scrollPrev();
	}

	function scrollNext() {
		if (emblaApi) emblaApi.scrollNext();
	}

	function scrollTo(index) {
		if (emblaApi) emblaApi.scrollTo(index);
	}

	function onInit(event) {
		emblaApi = event.detail;
		scrollSnaps = emblaApi.scrollSnapList();
		emblaApi.on('select', () => {
			selectedIndex = emblaApi.selectedScrollSnap();
		});
	}

	let hasImages = $derived(section.imageUrls && section.imageUrls.length > 0);
	let isCarousel = $derived(hasImages && section.imageUrls.length > 1);
	let isSingleImage = $derived(hasImages && section.imageUrls.length === 1);
</script>

<section class="text-blue pb-8 lg:py-12 text-center">
	<div class="mx-4 lg:mx-auto max-w-7xl">
		
		<!-- Wyświetlanie obrazów -->
		{#if isCarousel}
			<!-- Karuzela dla wielu obrazów -->
			<div class="relative h-60 md:h-100 lg:h-180 w-full overflow-hidden rounded-[2rem] mb-8">
				<div
					class="h-full overflow-hidden"
					use:emblaCarouselSvelte={{ options, plugins }}
					onemblaInit={onInit}
				>
					<div class="flex h-full">
						{#each section.imageUrls as imageUrl, index}
							<div class="relative h-full w-full flex-none">
								<div class="relative h-full w-full overflow-hidden">
									<img
										src={imageUrl}
										alt={`${section.title} - obraz ${index + 1}`}
										loading={index === 0 ? 'eager' : 'lazy'}
										fetchpriority={index === 0 ? 'high' : 'low'}
										decoding={index === 0 ? 'sync' : 'async'}
										class="absolute inset-0 h-full w-full object-cover object-center"
									/>
									<div
										class="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-black/30"
									></div>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<!-- Strzałki nawigacji -->
				<button
					class="absolute top-1/2 left-6 z-10 -translate-y-1/2 text-white transition-transform duration-300 hover:scale-110"
					onclick={scrollPrev}
					aria-label="Poprzedni obraz"
				>
					<svg class="h-12 w-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
					</svg>
				</button>

				<button
					class="absolute top-1/2 right-6 z-10 -translate-y-1/2 text-white transition-transform duration-300 hover:scale-110"
					onclick={scrollNext}
					aria-label="Następny obraz"
				>
					<svg class="h-12 w-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
					</svg>
				</button>

				<!-- Nawigacja kropkami -->
				{#if section.imageUrls.length > 1}
					<div class="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
						{#each scrollSnaps as _, index}
							<button
								class="h-3 w-3 rounded-full transition-all duration-300 {selectedIndex === index
									? 'scale-125 bg-white'
									: 'border border-white bg-white/30'}"
								onclick={() => scrollTo(index)}
								aria-label="Przejdź do obrazu {index + 1}"
							></button>
						{/each}
					</div>
				{/if}
			</div>

		{:else if isSingleImage}
			<!-- Pojedynczy obraz -->
			<div class="mb-4 lg:mb-8">
				<img
					src={section.imageUrls[0]}
					alt={section.title}
					class="h-60 md:h-100 w-full rounded-[2rem] object-cover object-center"
					loading="eager"
					fetchpriority="high"
				/>
			</div>
		{/if}

		<!-- Treść sekcji -->
		<div class="font-open-sans text-blue mx-auto max-w-5xl px-6 text-justify">
			<h2 class="font-haboro-soft text-md md:text-lg lg:text-2xl mb-6 text-center">{section.title}</h2>

			<p class="text-xs md:text-sm lg:text-lg font-light">
				{@html section.text}
			</p>

			{#if section.button}
				<div class="mt-8 flex justify-start">
					<a
						href={localizedPath}
						class="bg-orange hover:bg-orange/80 inline-block rounded-full px-4 py-1 text-xs md:text-sm lg:text-size-14 font-bold text-white transition"
					>
						{section.button.label}
					</a>
				</div>
			{/if}
		</div>
	</div>
</section>