<script>
	import { t } from 'svelte-i18n';
	import { infoStore } from '$lib/stores/infoStore.js';
</script>

<div class="relative">
	<!-- SVG tylko na desktopie -->
	<div
		class="absolute top-10 right-0 -z-10 hidden h-auto w-full translate-x-[70%] lg:block xl:w-full"
	>
		<svg
			id="Layer_2"
			data-name="Layer 2"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 387.23 401.24"
			class="hidden h-full w-full lg:block"
		>
			<defs>
				<style>
					.cls-1 {
						stroke-linejoin: round;
					}

					.cls-1,
					.cls-2 {
						fill: none;
						stroke: #2d68b2;
						stroke-linecap: round;
						stroke-width: 9.99px;
					}

					.cls-2 {
						stroke-miterlimit: 10;
					}

					.cls-3 {
						opacity: 0.1;
					}
				</style>
			</defs>
			<g id="Kontakt">
				<g class="cls-3">
					<polyline class="cls-1" points="124.28 289.32 124.28 58.74 178.02 4.99" />
					<polyline class="cls-1" points="231.77 396.24 231.77 58.74 178.02 4.99" />
					<polyline class="cls-1" points="248.52 96.93 307 58.74 382.24 107.87 382.24 329.45" />
					<line class="cls-1" x1="273.22" y1="127.84" x2="273.22" y2="166.99" />
					<line class="cls-1" x1="307" y1="127.84" x2="307" y2="166.99" />
					<line class="cls-1" x1="341.55" y1="127.84" x2="341.55" y2="166.99" />
					<line class="cls-1" x1="273.22" y1="190.03" x2="273.22" y2="229.18" />
					<line class="cls-1" x1="307" y1="190.03" x2="307" y2="229.18" />
					<line class="cls-1" x1="341.55" y1="190.03" x2="341.55" y2="229.18" />
					<line class="cls-1" x1="273.22" y1="247.61" x2="273.22" y2="289.32" />
					<line class="cls-1" x1="307" y1="247.61" x2="307" y2="289.32" />
					<line class="cls-1" x1="341.55" y1="247.61" x2="341.55" y2="289.32" />
					<rect class="cls-1" x="148.08" y="124" width="19.2" height="42.99" />
					<rect class="cls-1" x="187.24" y="124" width="19.2" height="42.99" />
					<rect class="cls-1" x="148.08" y="186.96" width="19.2" height="42.99" />
					<rect class="cls-1" x="187.24" y="186.96" width="19.2" height="42.99" />
					<rect class="cls-1" x="148.08" y="62.16" width="19.2" height="42.99" />
					<rect class="cls-1" x="187.24" y="62.16" width="19.2" height="42.99" />
					<rect class="cls-1" x="148.08" y="245.29" width="19.2" height="44.02" />
					<rect class="cls-1" x="187.24" y="245.29" width="19.2" height="44.02" />
					<g>
						<line class="cls-2" x1="111.49" y1="305.22" x2="64.28" y2="305.22" />
						<line class="cls-2" x1="111.49" y1="265.78" x2="64.28" y2="265.78" />
						<line class="cls-2" x1="17.59" y1="305.22" x2="64.81" y2="305.22" />
						<line class="cls-2" x1="17.59" y1="265.78" x2="64.81" y2="265.78" />
						<polyline class="cls-2" points="124.09 289.32 124.09 155.71 64.54 103.31" />
						<line class="cls-2" x1="99.52" y1="159.35" x2="99.52" y2="325.19" />
						<line class="cls-2" x1="75.72" y1="135.55" x2="75.72" y2="325.19" />
						<line class="cls-2" x1="111.49" y1="222.02" x2="64.28" y2="222.02" />
						<line class="cls-2" x1="111.49" y1="179.98" x2="64.28" y2="179.98" />
						<polyline class="cls-2" points="64.54 103.31 4.99 155.71 4.99 338.81" />
						<line class="cls-2" x1="29.56" y1="159.35" x2="29.56" y2="325.19" />
						<line class="cls-2" x1="53.36" y1="135.55" x2="53.36" y2="325.19" />
						<line class="cls-2" x1="17.59" y1="222.02" x2="64.81" y2="222.02" />
						<line class="cls-2" x1="17.59" y1="179.98" x2="64.81" y2="179.98" />
					</g>
				</g>
			</g>
		</svg>
	</div>
	<!-- Dane + logo w rzędzie na mobile, w kolumnie na desktopie -->
	<h3
		class="font-haboro-soft text-blue text-size-10 lg:first-letter:text-size-18 text-center whitespace-nowrap md:text-lg lg:text-left lg:text-2xl"
	>
		{$t('contact.header-payments')}
	</h3>
	<div class="flex max-w-xs flex-row items-center gap-2 md:max-w-xl lg:flex-col lg:items-start">
		<div class="flex flex-col space-y-2">
			<p class="font-haboro-soft text-blue text-xs md:text-sm lg:text-lg">
				Fundacja Aktywni Lokalnie
			</p>
			<p class="font-open-sans text-blue text-xs font-light md:text-sm lg:text-lg">
				{$infoStore.addressFund[0]}
			</p>
			<p class="font-open-sans text-blue text-xs font-light md:text-sm lg:text-lg">
				{$infoStore.addressFund[1]} {$infoStore.addressFund[2]}
			</p>
			<p class="font-open-sans text-blue text-xs font-light md:text-sm lg:text-lg">
				NIP: {$infoStore.nipVat[0]}
			</p>
			<p class="font-open-sans text-blue text-xs font-light md:text-sm lg:text-lg">
				NIP EU: {$infoStore.nipVat[1]}
			</p>
			<p class="font-open-sans text-blue text-xs font-light md:text-sm lg:text-lg">
				KRS: {$infoStore.nipVat[2]}
			</p>
			<p class="font-open-sans text-blue text-xs font-light md:text-sm lg:text-lg">MBank:</p>
			<p class="font-open-sans text-blue text-xs font-light md:text-sm lg:text-lg">
				{$infoStore.bankInfo[0]}
			</p>
			<p class="font-open-sans text-blue text-xs font-light md:text-sm lg:text-lg">
				{$infoStore.bankInfo[1]}
			</p>
			<p class="font-open-sans text-blue text-xs font-light md:text-sm lg:text-lg">
				Kod {$infoStore.bankInfo[2]}
			</p>
		</div>
		<img src="/fal-logo2.png" alt="FAL logo" class="lg:hidden h-auto w-30 md:w-60 max-w-full mb-40" />
	</div>
</div>
