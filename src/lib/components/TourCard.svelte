<script>
	import Diamond from './Diamond.svelte';
	import { getLocalizedPath, t } from '$lib/translations/helper.js';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	const { title, description, distance, start, date } = $props();
	let lang = page.params.lang || 'en';
	let path = getLocalizedPath('/tours', lang);
	let tourPath = `${path}/rowerowa-przygoda`;
	function gotoTour() {
		goto(tourPath);
	}
</script>

<div class="relative">
	<!-- Napis + strzałka na górze -->
	<div class="flex w-full max-w-7xl justify-center pb-6 lg:pb-0">
		<div class="z-10 flex items-center gap-2">
			<span class="font-haboro-soft text-blue text-center font-extrabold">
				<span class="text-size-26 lg:text-size-32">D</span><span
					class=" text-size-20 lg:text-size-26">OŁĄCZ DO WYCIECZKI</span
				>
			</span>
			<enhanced:img
				src="../images/arrow2.svg"
				alt="Strzałka"
				class="z-10 h-12 w-12 translate-y-[10px] lg:h-17 lg:w-17 lg:translate-y-[20px]"
			/>
		</div>
	</div>

	<Diamond />

	<!-- Desktopowa karta -->
	<div
		class="border-blue/10 relative z-10 my-12 hidden max-h-[700px] w-full overflow-hidden rounded-[6rem] border-[24px] bg-[#f5f8ff33] lg:flex"
	>
		<!-- Lewa kolumna -->
		<div class="text-blue flex-1 space-y-4 px-12 py-8">
			<h2 class="font-haboro-soft text-size-26 font-extrabold">Gdańsk Daily Bike Tour</h2>
			<p class="font-open-sans text-size-14 text-blue leading-relaxed font-light">
				Chcesz odkryć Gdańsk, ale masz niewiele czasu?
			</p>
			<p class="font-open-sans text-size-14 text-blue mt-4 leading-relaxed font-light">
				Zabierz się z nami na wyprawę przez 1000 lat historii Gdańska w 3 godziny. Nasz przewodnik
				odkryje przed tobą karty historii, a przy okazji poznasz innych odwiedzających miasto.
			</p>
			<ul class="font-open-sans text-size-14 space-y-1 font-light">
				<li class="py-1">
					Dystans: <span class="font-open-sans text-size-14 font-semibold">15km</span>
				</li>
				<li class="py-2">
					Start: <span class="font-open-sans text-size-14 font-semibold">10:00</span>
				</li>
				<li class="py-2">
					Kiedy: <span class="font-open-sans text-size-14 font-semibold">25.07.2025</span>
				</li>
			</ul>
			<div class="flex justify-end pt-4">
				<button
					onclick={gotoTour}
					class="font-open-sans text-size-14 bg-orange rounded-full px-10 py-2 font-semibold text-white transition hover:bg-orange-600"
				>
					DOŁĄCZ
				</button>
			</div>
		</div>
		<!-- Prawa kolumna - szersza -->
		<div class="relative flex-[1.2]">
			<enhanced:img
				src="/static/tour.avif"
				alt="Zdjęcie wycieczki"
				class="absolute inset-0 h-full w-full object-cover"
			/>
		</div>
	</div>

	<!-- Wersja mobilna -->
	<div
		class="border-blue/10 relative z-10 flex min-h-screen w-full flex-col overflow-hidden rounded-r-[4rem] border-t-[24px] border-r-[24px] border-b-[24px] bg-[#f5f8ff33] lg:hidden"
	>
		<!-- Górna sekcja - obrazek -->
		<div class="relative h-[500px]">
			<enhanced:img
				src="/static/tour.avif"
				alt="Zdjęcie wycieczki"
				class="absolute inset-0 h-full w-full rounded-tr-[2.5rem] rounded-br-[2.5rem] object-cover"
			/>
		</div>
		<!-- Dolna sekcja - tekst -->
		<div class="text-blue flex-1 space-y-6 p-8">
			<h2 class="font-haboro-soft text-size-24 font-extrabold">Gdańsk Daily Bike Tour</h2>
			<p class="font-open-sans text-size-12 text-blue leading-relaxed font-light">
				Chcesz odkryć Gdańsk, ale masz niewiele czasu?
			</p>
			<p class="font-open-sans text-size-12 text-blue mt-4 leading-relaxed font-light">
				Zabierz się z nami na wyprawę przez 1000 lat historii Gdańska w 3 godziny. Nasz przewodnik
				odkryje przed tobą karty historii, a przy okazji poznasz innych odwiedzających miasto.
			</p>
			<ul class="font-open-sans text-size-12 space-y-2 font-light">
				<li class="py-1">
					Dystans: <span class="font-open-sans text-size-12 font-light">15km</span>
				</li>
				<li class="py-2">
					Start: <span class="font-open-sans text-size-12 font-semibold">10:00</span>
				</li>
				<li class="py-2">
					Kiedy: <span class="font-open-sans text-size-12 font-semibold">25.07.2025</span>
				</li>
			</ul>
			<div class="flex justify-start pt-4">
				<button
					onclick={gotoTour}
					class="font-open-sans text-size-12 bg-orange rounded-full px-10 py-2 text-lg font-semibold text-white transition hover:bg-orange-600"
				>
					DOŁĄCZ
				</button>
			</div>
		</div>
	</div>
</div>
