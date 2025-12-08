<script>
	import { page } from '$app/state';
	import { getLocalizedPath, t } from '$lib/translations/helper.js';
	import ThreeBikes from '$lib/components/ThreeBikes.svelte';
	let {info}= $props();
	let lang = page.params.lang || 'en';
	const faqPath = getLocalizedPath('/faq', lang);
	const termsAndConditionsPath = getLocalizedPath('/terms-and-conditions', lang);
	const privacyPolicyPath = getLocalizedPath('/privacy-policy', lang);

</script>

<!-- napis+ikonki rowerów -->
<!-- MOBILE:  -->
<div class="bg-greyish flex flex-col-reverse items-center justify-between px-6 pt-6 pb-0 lg:hidden">
	<ThreeBikes class="mb-0 h-12 w-auto" />
	<h2 class="font-haboro-soft text-blue mb-4 text-2xl font-extrabold">NEVER STOP CYCLING</h2>
</div>
<!-- DESKTOP: -->
<div class="bg-greyish hidden items-center justify-between px-6 pb-0 lg:flex">
	<h2 class="font-haboro-soft text-blue -mb-10 text-4xl font-extrabold">NEVER STOP CYCLING</h2>
	<ThreeBikes class="-mb-1 h-16 w-auto" />
</div>
<!-- koniec napis+ikonki rowerów  -->

<footer class="bg-blue text-sm text-white">
	<div class="flex w-full flex-col gap-4 px-6 pt-14 pb-3">
		<!-- Mobile layout -->
		<div class="flex flex-col gap-6 lg:hidden">
			<!-- Kontakt + Godziny w jednym rzędzie -->
			<div class="flex flex-row justify-between gap-6">
				<!-- Kontakt -->
				<div class="flex min-w-[150px] flex-col">
					<h2 class="font-roboto text-size-10 mb-2 font-semibold">KONTAKT:</h2>
					{#each info.phone as number}
			<a
				href={`tel:${number.replace(/\s+/g, '')}`}
				class="font-open-sans text-size-10 py-1 leading-relaxed font-light tracking-wide hover:underline"
			>
				{number}
			</a>
		{/each}
					<a
						href="mailto:contact@polandbylocals.com"
						class="font-open-sans text-size-10 py-1 leading-relaxed font-light tracking-wide hover:underline"
					>
						contct@polandbylocals.com
					</a>
				</div>

				<!-- Godziny -->
				<div class="flex min-w-[150px] flex-col">
					<h2 class="font-roboto text-size-10 mb-2 font-semibold">GODZINY OTWARCIA:</h2>
					<p class="font-open-sans text-size-10 font-light tracking-wide">Pon-Nd {info.openHour}</p>
				</div>
			</div>

			<!-- Adres + Logo w jednym rzędzie (mobile only) -->
			<div class="flex flex-row justify-between gap-6 lg:hidden">
				<!-- Adres -->
				<div class="flex min-w-[150px] flex-col">
					<h2 class="font-roboto text-size-10 mb-2 font-semibold">ADRES:</h2>
					<p class="font-open-sans text-size-10 font-light tracking-wide">
						Fundacja Aktywni Lokalnie
					</p>
					<p class="font-open-sans text-size-10 font-light tracking-wide"> {info.addressFund[0]}</p>
					<p class="font-open-sans text-size-10 font-light tracking-wide"> {info.addressFund[1]}  {info.addressFund[2]}</p>
					{#each info.nipVat as value, i}
	<p class="font-open-sans text-size-10 {i === 0 ? 'mt-8 pb-1' : i === 1 ? 'py-2' : 'py-1'}">
		<span class="font-semibold">
			{i === 0 ? 'NIP' : i === 1 ? 'NIP EU' : 'KRS'}:
		</span>
		{info.nipVat[i]}
	</p>
{/each}

				</div>

				<!-- Logo -->
				<div class="flex min-w-[120px] flex-col items-center">
					<enhanced:img src="/static/fal-logo.png" alt="Fundacja" class="h-[60px] w-[140px]" />
				</div>
			</div>

			<!-- Członkowie (MOBILE) -->
			<div class="flex flex-col items-start">
				<h2 class="font-roboto text-size-10 mb-2 font-semibold">JESTEŚMY CZŁONKAMI:</h2>
			</div>
			<enhanced:img
				src="/static/visit-gdansk.png"
				alt="Visit Gdańsk"
				width="180"
				height="61"
				class="mx-auto"
			/>
		</div>

		<!-- Desktop layout -->
		<div class="hidden flex-row items-start justify-between gap-8 lg:flex">
			<!-- Kontakt -->
			<div class="flex min-w-[150px] flex-col">
				<h2 class="mb-2 font-semibold">Kontakt:</h2>
					{#each info.phone as number}
			<a
				href={`tel:${number.replace(/\s+/g, '')}`}
				class="font-open-sans text-size-10 py-1 leading-relaxed font-light tracking-wide hover:underline"
			>
				{number}
			</a>
		{/each}
				<a
					href="mailto:contact@polandbylocals.com"
					class="font-open-sans text-size-10 py-1 leading-relaxed font-light tracking-wide hover:underline"
				>
					contact@polandbylocals.com
				</a>
			</div>

			<!-- Adres + NIP -->
			<div class="flex min-w-[150px] flex-col">
				<h2 class="mb-2 font-semibold">Adres:</h2>
				<p class="font-open-sans text-size-10 font-light tracking-wide">
					Fundacja Aktywni Lokalnie
				</p>
				<p class="font-open-sans text-size-10 font-light tracking-wide">{info.addressFund[0]}</p>
				<p class="font-open-sans text-size-10 font-light tracking-wide">{info.addressFund[1]} {info.addressFund[2]}</p>
				{#each info.nipVat as value, i}
	<p class="font-open-sans text-size-10 {i === 0 ? 'mt-8 pb-1' : i === 1 ? 'py-2' : 'py-1'}">
		<span class="font-semibold">
			{i === 0 ? 'NIP' : i === 1 ? 'NIP EU' : 'KRS'}:
		</span>
		{info.nipVat[i]}
	</p>
{/each}
			</div>

			<!-- Godziny -->
			<div class="flex min-w-[150px] flex-col">
				<h2 class="mb-2 font-semibold">Godziny otwarcia:</h2>
				<p class="font-open-sans text-size-10 font-light tracking-wide">Pon-Nd {info.openHour}</p>
			</div>

			<!-- Inicjatywa -->
			<div class="flex min-w-[150px] flex-col items-start">
				<h2 class="mb-2 font-semibold">Inicjatywa:</h2>
				<enhanced:img src="/static/fal-logo.png" alt="Fundacja" class="h-[60px] w-[140px]" />
			</div>

			<!-- Członkowie -->
			<div class="flex min-w-[150px] flex-col items-start">
				<h2 class="mb-2 font-semibold">Jesteśmy członkami:</h2>
				<enhanced:img
					src="/static/visit-gdansk.png"
					alt="Visit Gdańsk"
					width="180"
					height="61"
					class="mx-auto"
				/>
			</div>
		</div>

		<!-- Divider -->
		<div class="w-full border-t border-white lg:mx-auto lg:w-[90%]"></div>

		<!-- Linki + copyright -->
		<div
			class="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:justify-center lg:gap-20"
		>
			<!-- Linki -->
			<div class="flex flex-wrap justify-center gap-1">
				<a href={termsAndConditionsPath} class="font-open-sans font-light hover:underline"
					>{t('tc', lang)}</a
				>
				<span class="text-orange">&nbsp;•&nbsp;</span>
				<a href={privacyPolicyPath} class="font-open-sans font-light hover:underline"
					>{t('privacy', lang)}</a
				>
				<span class="text-orange">&nbsp;•&nbsp;</span>
				<a href={faqPath} class="font-open-sans font-light hover:underline">{t('faq', lang)}</a>
			</div>

			<!-- Copyright -->
			<div class="flex flex-wrap items-center justify-center gap-1">
				<p class="font-open-sans font-light">Copyright 2025 Gdańsk By Bike ©</p>
				<span class="text-orange">&nbsp;•&nbsp;</span>
				<p class="font-open-sans font-light">All Rights Reserved</p>
				<span class="text-orange">&nbsp;•&nbsp;</span>
				<p class="font-open-sans font-light">
					Designed by
					<a
						href="https://baxy.it"
						target="_blank"
						rel="noopener noreferrer"
						class="text-orange font-open-sans font-normal hover:underline"
					>
						BAXY IT
					</a>
					&nbsp;&amp;&nbsp;
					<a
						href="mailto:agnieszkamariamazur@gmail.com"
						class="text-orange font-open-sans font-normal hover:underline"
					>
						AMM
					</a>
				</p>
			</div>
		</div>
	</div>
</footer>
