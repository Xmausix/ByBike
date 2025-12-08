<script>
	import { getLocalizedPath } from '$lib/translations/helper.js';
	const { rental, lang } = $props();

	const rentalPath = $derived(
		rental?.categoryKey && lang 
			? getLocalizedPath('/rentals', lang) + '/' + rental.categoryKey 
			: ''
	);
</script>

<a
	href={rentalPath}
	class="hover:bg-navy group bg-navy border-navy w-full max-w-sm overflow-hidden rounded-[32px] md:rounded-[48px] lg:rounded-[64px] border-10 transition-colors duration-300  flex flex-col"
>
	<img src={rental.imageUrl} alt={rental.name} class="h-30 md:h-50 lg:h-70 w-full rounded-[24px] md:rounded-[32px] object-cover" />
	<div class="md:px-4 pt-4 md:pb-6 text-center flex flex-col h-full text-white">
		<h3 class=" font-haboro-soft text-md md:text-lg lg:text-2xl text-center lg:text-left font-bold">{rental.name}</h3>
		<p class=" font-open-sans text-xs md:text-sm lg:text-lg mt-1 text-center lg:text-left font-light">
			{rental.tagLine}
		</p>
		<div class="space-y-1 text-left text-sm text-gray-600 mt-auto">
			<div class="flex items-end justify-center gap-2 md:justify-end mt-4">
				<span
					class="rounded-full bg-orange-500 px-4 md:px-6 py-1 text-xs md:text-sm font-bold text-white transition hover:bg-orange-600"
				>
					JUŻ OD {rental.price}{lang === 'pl' ? 'zł' : '€'}
				</span>
			</div>
		</div>
	</div>
</a>