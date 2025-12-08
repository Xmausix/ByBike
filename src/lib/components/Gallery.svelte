<script>
	import Crane from './Crane.svelte';
	import { getLocalizedPath } from '$lib/translations/helper.js';
	import { page } from '$app/state';
	let lang = page.params.lang || 'en';
	let path = getLocalizedPath('/gallery', lang);
	let galleryPath = `${path}`;
</script>

<section class="w-full max-w-7xl py-10">
	<div class="group relative h-[500px] overflow-hidden rounded-[3rem] md:h-[400px] lg:h-[600px]">
		<img
			src="/gallery1280.avif"
			srcset="
				/gallery480.avif 480w,
				/gallery768.avif 768w,
				/gallery1280.avif 1280w,
				/gallery1920.avif 1920w
			"
			sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 1280px) 1280px, 1920px"
			alt="WYCIECZKI CODZIENNE"
			width="1280"
			height="500"
			loading="lazy"
			class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
		/>

		<div
			class="pointer-events-none absolute -bottom-10 left-0 z-10 w-full transition-transform duration-500 group-hover:-translate-y-2 lg:-bottom-25"
		>
			<Crane class="h-[20px] w-full" />
		</div>

		<!-- Tekst + przycisk -->
		<div
			class="absolute inset-0 flex items-start justify-end p-4 text-center text-white lg:items-center lg:justify-start lg:p-16 lg:text-left"
		>
			<div class="mr-12 mb-16 flex flex-col items-end lg:mr-0 lg:ml-50 lg:items-start">
				<h2
					class="font-haboro-soft text-size-36 lg:text-size-49 font-bold text-white uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
				>
					Galeria
				</h2>

				<a
					href={galleryPath}
					class="font-haboro-soft mt-2 w-full rounded-full border-2 border-white px-8 py-2 text-sm font-normal transition-all duration-500 ease-in-out
						group-hover:bg-white group-hover:text-black lg:mt-4 lg:w-fit lg:px-5 lg:py-2"
				>
					OBEJRZYJ
				</a>
			</div>
		</div>
	</div>
</section>
