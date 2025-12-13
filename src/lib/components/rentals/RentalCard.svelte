<script>
  import { getLocalizedPath } from '$lib/translations/helper.js';

  // props
  export let rental;
  export let lang = 'pl';

  // reactive
  $: rentalPath =
    rental?.categoryKey && lang
      ? `${getLocalizedPath('/rentals', lang)}/${rental.categoryKey}`
      : '';

  // helpers
  const currency = lang === 'pl' ? 'zł' : '€';
</script>

<a
  href={rentalPath}
  class="group bg-navy border-navy w-full max-w-sm overflow-hidden
    rounded-[32px] md:rounded-[48px] lg:rounded-[64px] border-[10px]
    transition-colors duration-300 hover:bg-navy/90 flex flex-col"
>
  <img
    src={rental.imageUrl}
    alt={`Zdjęcie: ${rental.name}`}
    class="h-30 md:h-50 lg:h-70 w-full object-cover rounded-[24px] md:rounded-[32px]"
  />

  <div class="px-4 pt-4 pb-6 text-center flex flex-col h-full text-white">
    <h3 class="font-haboro-soft text-md md:text-lg lg:text-2xl font-bold">
      {rental.name}
    </h3>

    <p class="font-open-sans text-xs md:text-sm lg:text-lg mt-1 font-light">
      {rental.tagLine}
    </p>

    <div class="mt-auto flex justify-center md:justify-end">
			<span
        class="rounded-full bg-orange-500 px-4 md:px-6 py-1
				text-xs md:text-sm font-bold text-white transition hover:bg-orange-600"
      >
				JUŻ OD {rental.price}{currency}
			</span>
    </div>
  </div>
</a>
