<script>
  import { getLocalizedPath } from '$lib/translations/helper.js';

  export let rental;
  export let lang = 'pl';

  // Path for rental
  $: rentalPath =
    rental?.categoryKey && lang
      ? `${getLocalizedPath('/rentals', lang)}/${rental.categoryKey}`
      : '';

  const currency = lang === 'pl' ? 'zł' : '€';
</script>

<a
  href={rentalPath}
  class="group bg-navy text-white border-navy w-full rounded-[32px] md:rounded-[48px]
	border-[10px] overflow-hidden flex flex-col lg:flex-row transition-colors duration-300
	hover:bg-navy/90"
>
  <!-- Thumbnail -->
  <div class="w-full lg:w-1/2">
    <img
      src={rental.imageUrl}
      alt={`Zdjęcie: ${rental.name}`}
      class="w-full h-40 md:h-60 lg:h-full object-cover"
    />
  </div>

  <!-- Content -->
  <div class="flex flex-col flex-1 p-6 lg:p-10">
    <header>
      <h3 class="font-haboro-soft text-lg md:text-xl lg:text-3xl font-bold">
        {rental.name}
      </h3>
      <p class="font-open-sans text-xs md:text-sm lg:text-lg font-light mt-2">
        {rental.tagLine}
      </p>
    </header>

    <!-- Description -->
    <p class="font-open-sans text-xs md:text-sm lg:text-base mt-4 leading-relaxed opacity-90">
      {rental.description}
    </p>

    <!-- CTA -->
    <footer class="mt-auto pt-6 flex justify-end">
            <span
              class="rounded-full bg-orange-500 px-6 py-2 text-xs md:text-sm
                font-bold text-white transition hover:bg-orange-600"
            >
                JUŻ OD {rental.price}{currency}
            </span>
    </footer>
  </div>
</a>
