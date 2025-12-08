<script>
	import AboutText from '$lib/components/about-us/AboutText.svelte';
	import FoundationFrame from '$lib/components/about-us/FoundationFrame.svelte';
	import { t } from 'svelte-i18n';
	let { data } = $props();
</script>

<div>
	<div class="relative mb-10 h-[300px] w-full overflow-hidden rounded-b-3xl sm:mb-20 md:h-[400px]">
		<!-- Zdjęcie jako tło -->
		<img
			src={data.subpage[0].imagePreviewUrl}
			alt={data.subpage[0].idStrony}
			class="absolute inset-0 z-0 h-full w-full object-cover"
		/>

		<!-- Gradient na dole -->
		<div
			class="pointer-events-none absolute bottom-0 left-0 z-10 h-1/2 w-full"
			style="background: linear-gradient(to top, rgba(0,0,0,0.55), transparent); border-radius: 0 0 1.5rem 1.5rem;"
		></div>
	</div>
	<h3 class="text-size-22 sm:text-size-26 font-haboro-soft text-blue text-center">
		{$t('about-us.header')}
	</h3>
	<!-- Grid -->
	<div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:mt-8 lg:grid-cols-3 md:mx-10">
		<div class="col-span-1 flex items-center justify-center">
			<svg
				id="Layer_2"
				data-name="Layer 2"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 356.89 591.45"
				class="hidden h-auto w-100 lg:block"
			>
				<defs>
					<style>
						.cls-1 {
							fill: none;
							stroke: #f26522;
							stroke-linecap: round;
							stroke-linejoin: round;
							stroke-width: 13.92px;
						}

						.cls-2 {
							fill: #f26522;
							font-family: HaboroSoft-NorExB, 'Haboro Soft';
							font-size: 26px;
						}

						.cls-3 {
							fill: #2d68b2;
							fill-rule: evenodd;
						}

						.cls-4 {
							opacity: 0.1;
						}
					</style>
				</defs>
				<g id="O_Nas" data-name="O Nas">
					<g>
						<g class="cls-4">
							<polyline
								class="cls-1"
								points="209.69 384.45 209.69 251.31 275.29 251.31 275.29 114.01 298.08 6.96 320.87 114.01 320.87 427.21"
							/>
							<polyline
								class="cls-1"
								points="209.86 422.11 209.86 252.67 186.07 220.58 162.27 252.67 162.27 252.67"
							/>
							<polyline
								class="cls-1"
								points="162.27 252.67 162.27 252.67 129.56 220.58 96.85 252.67 96.85 252.67"
							/>
							<polyline
								class="cls-1"
								points="96.22 252.67 96.22 252.67 72.43 220.58 48.64 252.67 48.64 584.49"
							/>
						</g>
						<g class="cls-4">
							<path
								class="cls-3"
								d="M273.51,433.98c-5.45-2.44-10.39-1.91-15.7.09-29.23,11-58.58,21.72-87.88,32.53-.4.15-26.12,9.37-25.81,9.09-1.41-3.36-2.14-6.95-3.78-10.86,1.97-.62,28.89-10.17,31.11-11,28.6-10.57,57.19-21.17,85.78-31.75.99-.37,1.98-.72,2.97-1.06q3.36-1.15,3.42-5.06c-52.5-12.42-74.78-14.02-105.49-18.6-1.88,16.06-6.46,63.51-6.46,63.51l-12.22,4.34s4.43-47.79,5.93-60.86c-4.49,1.82-8.74,3.54-13.08,5.3,2.38,7.76,3.55,15.59,3.27,23.59-.1,2.92-.52,5.82-.76,8.73-.1,1.16-.52,1.7-1.77,2.12-2.61.88-5.27,1.89-7.54,3.4-1.99,1.33-3.55,1.56-5.57-.09,2.89-10.66,3.16-21.51,0-32.49-8.48,3.39-16.84,6.7-25.17,10.08-6.05,2.45-12.1,4.94-18.09,7.53-.82.36-1.61,1.28-1.98,2.13-1.34,3.13-4.37,5.14-7.64,4.81-3.17-.31-5.77-2.81-6.18-5.92-.42-3.24,1.47-6.32,4.7-7.64,26.47-10.85,52.94-21.7,79.42-32.52,1.12-.46,1.83-.89,1.97-2.29,1.26-12.07,2.59-24.13,4-36.19.18-1.53-.23-2.2-1.58-2.91-5.88-3.11-10.45-7.61-12.9-13.86-.84-2.14-1.15-4.67-1-6.98.19-3.16,2.19-5.37,5.23-6.42,3-1.03,5.56-.06,7.89,1.93,3.64,3.11,7.16,6.41,11.06,9.15,6.32,4.44,13.63,6.88,20.86,9.43,4.52,1.6,8.93,3.53,13.27,5.58,3.74,1.77,4.84,5.21,3.13,8.59-1.5,2.98-5.14,4.17-8.53,2.42-7.9-4.07-16.55-5.11-25.42-6.68-1.19,10.19-2.37,20.26-3.58,30.52,35.12,6.22,70.14,12.42,105.36,18.66.49-5.22.96-10.19,1.43-15.17.66-6.99,3.31-10.03,10.41-11.65-.75-.41-1.28-.73-1.84-.99-11.27-5.15-22.55-10.28-33.82-15.44-2.97-1.36-4.26-3.6-3.85-6.4.39-2.68,2.27-4.8,4.94-5.11,1.28-.15,2.76,0,3.92.52,17.86,8.08,35.7,16.2,53.5,24.4,4.92,2.26,6.97,8.35,4.71,13.22-2.32,5.01-8.26,7.32-13.28,5.14-2.69-1.17-5.32-2.45-8-3.64-3.29-1.47-4.77-.63-5.11,2.88-1.31,13.28-2.61,26.55-3.91,39.83-.06.59-.18,1.17-.32,2.04Z"
							/>
							<path
								class="cls-3"
								d="M255.69,454.05c-.27,4.42-.55,8.8-.82,13.26-7.57,1.63-14.42,4.53-20.72,8.78-32.43,21.87-32.12,70.83.6,92.18,21.92,14.3,51.71,9.64,69.52-10.87,20.55-23.66,17.85-60-5.93-79.59-5.94-4.9-12.7-8.2-20.15-10.13-.79-.2-1.57-.45-2.55-.73.34-4.33.67-8.63,1.06-13.57,4.93,1.54,9.68,2.66,14.14,4.49,24.47,10.06,40.39,34.31,40.62,61.49.3,35.6-25.06,65.09-60.23,70.03-28.29,3.97-55.86-11.07-67.95-37.23-8.59-18.59-9.73-37.7-1.51-56.52,10.12-23.14,28.05-37.1,53.06-41.66.2-.04.42.03.86.06Z"
							/>
							<path
								class="cls-3"
								d="M126.35,395.79c-4.03,1.65-7.75,3.24-11.53,4.64-.47.17-1.54-.52-1.96-1.09-4.17-5.77-9.05-10.81-15.16-14.53-18.13-11.04-36.77-11.45-55.17-1.28-35.69,19.72-38.96,68.61-6.51,93.27,19.36,14.71,47.8,13.26,66.49-3.44,2.01-1.79,3.76-3.87,5.74-5.69.52-.48,1.63-.89,2.17-.66,1.16.52,2.85.48,3,2.5.25,3.27.87,6.52,1.08,9.79.05.82-.72,1.89-1.41,2.53-9.82,9.11-21.34,14.97-34.51,17.38C36.16,506.98,1.6,474.4.05,435.05c-1.83-46.51,42.3-81.64,87.18-69.45,17.1,4.65,29.77,14.97,39.11,30.19Z"
							/>
							<path
								class="cls-3"
								d="M260.32,528.11c-2.97-1.38-4.32-3.84-4.06-7.53,1.01-14.72,2.05-29.43,3.04-44.15.74-10.99,1.38-21.98,2.14-32.96.09-1.3.38-2.73,1.06-3.8,1.17-1.84,3.08-2.6,5.29-2.13,2.28.48,3.7,1.99,4.19,4.21.27,1.22.21,2.54.12,3.8-1.61,22.94-3.27,45.88-4.84,68.83-.05.79.52,1.77,1.08,2.42,2.33,2.7,2.57,6.52.45,9.33-1.97,2.62-5.36,3.41-8.47,1.97Z"
							/>
							<path
								class="cls-3"
								d="M77.23,445.12c2.13-3.09,3.95-5.72,5.88-8.52,20.23,9.25,44.45,20.32,65.25,29.83-1.49,3.25-2.87,6.28-4.24,9.27-21.34-9.75-45.92-20.99-66.9-30.58Z"
							/>
						</g>
						<g>
							<text class="cls-2" transform="translate(65.24 305.41) rotate(2.92)"
								><tspan x="0" y="0">A</tspan></text
							>
							<text class="cls-2" transform="translate(83.81 306.24) rotate(-2.36)"
								><tspan x="0" y="0">k</tspan></text
							>
							<text class="cls-2" transform="translate(98.89 305.51) rotate(-6.51)"
								><tspan x="0" y="0">t</tspan></text
							>
							<text class="cls-2" transform="translate(109.55 304.35) rotate(-10.92)"
								><tspan x="0" y="0">y</tspan></text
							>
							<text class="cls-2" transform="translate(124.94 301.51) rotate(-17.88)"
								><tspan x="0" y="0">w</tspan></text
							>
							<text class="cls-2" transform="translate(145.85 294.47) rotate(-25.67)"
								><tspan x="0" y="0">n</tspan></text
							>
							<text class="cls-2" transform="translate(159.98 287.43) rotate(-30.7)"
								><tspan x="0" y="0">i</tspan></text
							>
							<text class="cls-2" transform="translate(166.62 283.64) rotate(-35.77)"
								><tspan x="0" y="0">e</tspan></text
							>
						</g>
						<g>
							<text class="cls-2" transform="translate(210.42 174.4) rotate(3.88)"
								><tspan x="0" y="0">L</tspan></text
							>
							<text class="cls-2" transform="translate(223.54 175.26) rotate(5.94)"
								><tspan x="0" y="0">o</tspan></text
							>
							<text class="cls-2" transform="translate(238.47 176.81) rotate(8.39)"
								><tspan x="0" y="0">k</tspan></text
							>
							<text class="cls-2" transform="translate(252.04 178.79) rotate(11.06)"
								><tspan x="0" y="0">a</tspan></text
							>
							<text class="cls-2" transform="translate(265.72 181.54) rotate(13.37)"
								><tspan x="0" y="0">l</tspan></text
							>
							<text class="cls-2" transform="translate(272.01 182.92) rotate(16.1)"
								><tspan x="0" y="0">n</tspan></text
							>
							<text class="cls-2" transform="translate(285.96 187.05) rotate(19.24)"
								><tspan x="0" y="0">i</tspan></text
							>
							<text class="cls-2" transform="translate(292.01 189.01) rotate(22.84)"
								><tspan x="0" y="0">e</tspan></text
							>
						</g>
						<g>
							<text class="cls-2" transform="translate(223.1 398.53) rotate(50.74)"
								><tspan x="0" y="0">N</tspan></text
							>
							<text class="cls-2" transform="translate(238.58 415.7) rotate(34.51)"
								><tspan x="0" y="0">a</tspan></text
							>
							<text class="cls-2" transform="translate(251.16 424.03) rotate(29.48)"
								><tspan x="0" y="0"> </tspan></text
							>
							<text class="cls-2" transform="translate(256.44 427.13) rotate(26.47)"
								><tspan x="0" y="0">R</tspan></text
							>
							<text class="cls-2" transform="translate(271.05 434.31) rotate(25.75)"
								><tspan x="0" y="0">o</tspan></text
							>
							<text class="cls-2" transform="translate(284.34 440.53) rotate(28.63)"
								><tspan x="0" y="0">w</tspan></text
							>
							<text class="cls-2" transform="translate(301.79 450.11) rotate(34.91)"
								><tspan x="0" y="0">e</tspan></text
							>
							<text class="cls-2" transform="translate(313.2 458.17) rotate(41.16)"
								><tspan x="0" y="0">r</tspan></text
							>
							<text class="cls-2" transform="translate(320.35 464.23) rotate(48.07)"
								><tspan x="0" y="0">z</tspan></text
							>
							<text class="cls-2" transform="translate(328.56 473.18) rotate(56.89)"
								><tspan x="0" y="0">e</tspan></text
							>
						</g>
					</g>
				</g>
			</svg>
		</div>
		<div class="col-span-2 flex items-start justify-start px-4 sm:px-0 md:my-10 md:justify-center">
			<AboutText text={data.subpage[0].textAbout} />
		</div>
	</div>
	<div class="relative my-5 h-[300px] w-full overflow-hidden rounded-3xl md:my-20 md:h-[400px]">
		<img
			src="/hero11280.avif"
			alt="About us"
			class="absolute inset-0 z-0 h-full w-full object-cover"
		/>
	</div>
	<div class="mx-auto mt-4 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 md:mt-8 md:mx-10">
		<div class="flex items-center justify-center">
			<div
				class="text-size-10 sm:text-size-12 text-blue font-open-sans my-10 columns-1 px-4 text-justify leading-tight font-light sm:px-0"
			>
				{@html data.subpage[0].textFoundation_1}
			</div>
		</div>
		<div class="hidden items-center justify-center sm:flex">
			<img src="/fal-logo2.png" alt="FAL logo" class="h-auto w-110 max-w-full" />
		</div>
	</div>

	<div class="relative">
		<FoundationFrame text={data.subpage[0].textFoundation_2} />
	</div>
	<div class="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-center gap-6 sm:flex-row">
		<a
			href={data.subpage[0].foundationStatusFileURL}
			class="group bg-navy font-haboro-soft text-size-10 sm:text-size-12 hover:bg-dark-blue my-2 inline-flex items-center gap-3 rounded-full px-4 py-1 font-bold text-white uppercase transition"
		>
			{$t('about-us.button1')}
		</a>
		<a
			href={data.subpage[0].foundationFinFileURL}
			class="group bg-navy font-haboro-soft text-size-10 sm:text-size-12 hover:bg-dark-blue my-2 inline-flex items-center gap-3 rounded-full px-4 py-1 font-bold text-white uppercase transition"
		>
			{$t('about-us.button2')}
		</a>
	</div>
</div>
