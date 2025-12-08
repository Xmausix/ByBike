<script>
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { getLocalizedPath, t } from '$lib/translations/helper.js';
	import { goto } from '$app/navigation';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';

	let lang = page.params.lang || 'en';
	const toursPath = getLocalizedPath('/tours', lang);
	const rentalPath = getLocalizedPath('/rentals', lang);
	const eventsPath = getLocalizedPath('/events', lang);

	const heroSlides = [
		{
			id: 1,
			image: 'hero1',
			title: 'WYCIECZKI CODZIENNE',
			ctaText: 'DOŁĄCZ DO NAS',
			ctaLink: `${toursPath}/rowerowa-przygoda`,
			desktop: {
				avif: `/hero11280.avif 1280w, /hero11920.avif 1920w`
			},
			mobile: {
				avif: `/hero1480.avif 480w, /hero1768.avif 768w`
			}
		},
		{
			id: 2,
			image: 'hero3',
			title: 'WYCIECZKI GRUPOWE',
			ctaText: 'DOŁĄCZ DO NAS',
			ctaLink: `${toursPath}/rowerowa-przygoda`,
			desktop: {
				avif: `/hero31280.avif 1280w, /hero31920.avif 1920w`
			},
			mobile: {
				avif: `/hero3480.avif 480w, /hero3768.avif 768w`
			}
		},
		{
			id: 3,
			image: 'hero2',
			title: 'OFERTA WYNAJMU',
			ctaText: 'SPRAWDŹ',
			ctaLink: rentalPath,
			desktop: {
				avif: `/hero21280.avif 1280w, /hero21920.avif 1920w`
			},
			mobile: {
				avif: `/hero2480.avif 480w, /hero2768.avif 768w`
			}
		}
	];

	const options = {
		loop: true,
		duration: 30
	};
	const plugins = [Autoplay({ delay: 5000 })];

	let emblaApi;
	let selectedIndex = 0;
	let scrollSnaps = [];

	// Funkcja obsługi kliknięcia CTA
	function handleCTAClick(link) {
		goto(link);
	}

	// Funkcje nawigacji
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

	// Preload critical images
	onMount(() => {
		const link = document.createElement('link');
		link.rel = 'preload';
		link.as = 'image';
		link.href = '/hero11280.avif';
		link.type = 'image/avif';
		document.head.appendChild(link);
	});
</script>

<!-- Wersja desktopowa -->
<div class="bg-greyish hidden lg:mb-16 lg:block">
	<div class="relative h-screen w-full overflow-hidden rounded-bl-[2rem]">
		<!-- Karuzela Embla -->
		<div
			class="h-full overflow-hidden"
			use:emblaCarouselSvelte={{ options, plugins }}
			onemblaInit={onInit}
		>
			<div class="flex h-full">
				{#each heroSlides.slice(0, 2) as slide, index (slide.id)}
					<div class="relative h-full w-full flex-none">
						<!-- Optymalizowane tło obrazka -->
						<div class="relative h-full w-full overflow-hidden">
							<picture>
								<!-- AVIF dla nowoczesnych przeglądarek -->
								<source
									type="image/avif"
									srcset={slide.desktop.avif}
									sizes="(max-width: 1440px) 1280px, 1920px"
								/>

								<!-- Fallback img -->
								<img
									src={`/${slide.image}1280.avif`}
									alt={slide.title}
									width="1280"
									height="720"
									loading={index === 0 ? 'eager' : 'lazy'}
									fetchpriority={index === 0 ? 'high' : 'low'}
									decoding={index === 0 ? 'sync' : 'async'}
									class="absolute inset-0 h-full w-full object-cover object-[center_70%]"
								/>
							</picture>

							<!-- Nakładka -->
							<div
								class="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-black/30"
								style="will-change: transform"
							>
								<!-- Treść -->
								<div class="flex h-full items-center justify-start px-6 md:px-12 lg:pr-20 lg:pl-40">
									<div class="animate-fade-in-up max-w-2xl text-white">
										<h1
											class="text-size-49 font-haboro-soft mb-6 leading-tight font-extrabold tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
										>
											{slide.title}
										</h1>

										<button
											class="group bg-orange font-haboro-soft text-size-14 inline-flex items-center gap-3 rounded-full px-7 py-[6px] font-bold text-white uppercase transition hover:bg-orange-600"
											onclick={() => handleCTAClick(slide.ctaLink)}
										>
											{slide.ctaText}
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Strzałki nawigacji -->
		<button
			class="absolute top-1/2 left-6 z-10 -translate-y-1/2 text-white transition-transform duration-300 hover:scale-110"
			onclick={scrollPrev}
			aria-label="Poprzedni slajd"
		>
			<svg class="h-20 w-20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
			</svg>
		</button>

		<button
			class="absolute top-1/2 right-6 z-10 -translate-y-1/2 text-white transition-transform duration-300 hover:scale-110"
			onclick={scrollNext}
			aria-label="Następny slajd"
		>
			<svg class="h-20 w-20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
			</svg>
		</button>

		<!-- Nawigacja kropkami -->
		<div class="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3">
			{#each scrollSnaps as _, index}
				<button
					class="h-3 w-3 rounded-full transition-all duration-300 {selectedIndex === index
						? 'scale-125 bg-white'
						: 'border border-white bg-white/0'}"
					onclick={() => scrollTo(index)}
					aria-label="Przejdź do slajdu {index + 1}"
				></button>
			{/each}
		</div>
	</div>

	<!-- Optymalizowana sekcja pod karuzelą -->
	<div class="bg-gray-greyish grid w-full grid-cols-1 items-center gap-6 p-0 md:grid-cols-2">
		<!-- Logo z lazy loading -->
		<div class="flex justify-center">
			<picture>
				<source type="image/avif" srcset="/gbb-logo.png" sizes="(max-width: 480px) 300px, 600px" />
				<img
					src="/gbb-logo.png"
					alt="Gdańsk by Bike logo"
					class="h-auto w-full max-w-[300px]"
					width="308"
					height="216"
					loading="lazy"
					decoding="async"
				/>
			</picture>
		</div>

		<!-- zdjęcie oferta wynajmu -->
		<a href={rentalPath} class="relative overflow-hidden rounded-b-[5rem]">
			<picture>
				<source
					type="image/avif"
					srcset="/hero2960.avif 960w"
					sizes="(max-width: 768px) 100vw, 50vw"
				/>

				<img
					src="/hero2960.jpg"
					alt="Oferta wynajmu"
					class="h-[360px] w-full rounded-b-[5rem] object-cover object-[50%_70%]"
					width="960"
					height="360px"
					loading="lazy"
				/>
			</picture>

			<!-- Nakładka -->
			<div class="absolute inset-0 flex flex-col items-end justify-start p-6">
				<h2
					class="text-size-44 font-haboro-soft mb-2 leading-tight font-normal text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
				>
					<span class="inline-block pl-19">OFERTA</span><br />
					<span class="inline-block">WYNAJMU</span>
				</h2>
				<span
					class="group bg-orange font-haboro-soft text-size-14 inline-flex items-center gap-3 rounded-full px-8 py-[6px] font-bold text-white uppercase transition hover:bg-orange-600"
				>
					SPRAWDŹ
				</span>
			</div>
		</a>
	</div>
</div>

<!-- Wersja mobilna -->
<div class="bg-greyish flex flex-col lg:hidden">
	{#each heroSlides as slide, i (slide.id)}
		<div
			class="relative w-full overflow-hidden {i === heroSlides.length - 1
				? 'rounded-b-[3rem]'
				: ''}"
			style="height: {i === heroSlides.length - 1 ? '35vh' : '75vh'}"
		>
			<picture>
				<!-- AVIF na mobile -->
				<source
					type="image/avif"
					srcset={slide.mobile.avif}
					sizes="(max-width: 480px) 480px, 768px"
				/>

				<!-- Fallback img -->
				<img
					src={`/${slide.image}480.avif`}
					alt={slide.title}
					width="480"
					height="270"
					loading={i === 0 ? 'eager' : 'lazy'}
					fetchpriority={i === 0 ? 'high' : 'low'}
					decoding={i === 0 ? 'sync' : 'async'}
					class="absolute inset-0 h-full w-full object-cover object-[center_70%]"
				/>
			</picture>

			<!-- Nakładka -->
			<div
				class="absolute inset-0 flex flex-col
                    {i === 0 ? 'items-start justify-end' : ''}
                    {i === 1 ? 'items-end justify-start' : ''}
                    {i === 2 ? 'items-end justify-center' : ''}
                    bg-gradient-to-br from-black/20 via-black/10 to-black/30 p-6"
			>
				<h2
					class={`text-size-26 font-haboro-soft mb-2 leading-snug font-extrabold break-words text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] ${
						i === 0 ? 'text-left' : 'ml-auto w-fit text-left'
					}`}
				>
					{#if slide.title.includes(' ')}
						<span class="block">{slide.title.split(' ')[0]}</span>
						<span class="block">{slide.title.split(' ').slice(1).join(' ')}</span>
					{:else}
						{slide.title}
					{/if}
				</h2>

				{#if slide.ctaText}
					<button
						class="bg-orange font-haboro-soft text-size-14 w-fit rounded-full px-6 py-1 font-bold text-white uppercase transition hover:bg-orange-600"
						onclick={() => goto(slide.ctaLink)}
					>
						{slide.ctaText}
					</button>
				{/if}
			</div>
		</div>
	{/each}

	<!-- Logo mobilne -->
	<div class="flex justify-center py-15 md:justify-start">
		<img
			src="/gbb-logo.png"
			alt="Gdańsk by Bike logo"
			class="h-auto w-full max-w-[300px]"
			width="308"
			height="216"
			loading="lazy"
			decoding="async"
		/>
	</div>
</div>
