<script>
	import { getLocalizedPath } from '$lib/translations/helper.js';
	const { lang, rental } = $props();
	const rentalPath = $derived(
		rental?.categoryKey && lang ? getLocalizedPath('/rentals', lang) + '/' + rental.categoryKey : ''
	);
</script>

<a
	href={rentalPath}
	class="bg-navy border-navy col-span-2 mx-1 md:mx-auto flex max-w-4xl overflow-hidden rounded-[32px] md:rounded-[48px] lg:rounded-[64px] border-10 text-white "
>
	<img src={rental.imageUrl} alt={rental.name} class="w-1/2 object-cover" />

	<div class="flex flex-1 flex-col justify-end p-6 md:p-8">
		<h3 class=" text-md md:text-lg lg:text-2xl font-haboro-soft mb-4 font-bold">{rental.name}</h3>

		<div class="font-open-sans text-xs md:text-sm lg:text-lg mb-6 text-left font-light">
			{rental.tagLine}
		</div>

		<div class="flex justify-end">
			<span
					class="rounded-full bg-orange-500 px-4 md:px-6 py-1 text-xs md:text-sm font-bold text-white transition hover:bg-orange-600"
				>
				JUŻ OD {rental.price}{lang === 'pl' ? 'zł' : '€'}
			</span>
		</div>
	</div>
</a>
