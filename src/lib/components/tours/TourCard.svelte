<script>
  import { goto } from '$app/navigation';
  import { getLocalizedPath, t } from '$lib/translations/helper.js';

  const { lang, tour } = $props();

  const tourPath = $derived(() =>
    tour?.name && lang ? getLocalizedPath('/tours', lang) + '/' + tour.name : ''
  );
</script>

<a
  href={tourPath}
  class="border-blueish hover:bg-blueish group mx-auto w-full overflow-hidden rounded-[36px] border-10 bg-white transition-colors duration-300 md:rounded-[64px] md:border-20"
>
  <img
    src={tour.gallery || '/tour.avif'}
    alt={tour.name}
    class="h-30 w-full rounded-[24px] object-cover md:h-60 md:rounded-[32px]"
  />

  <div class="p-2 md:pb-6 text-center md:p-4">
    <h3 class="text-blue font-roboto text-left text-sm font-bold md:text-xl">
      {tour.name}
    </h3>

    <p class="text-blue font-open-sans mt-1 text-left text-xs sm:text-sm">
      {tour.tagLine}
    </p>

    <div class="mt-4 space-y-1 px-2 text-left text-xs text-gray-600 md:text-sm">

      <p class="my-2">
        <span class="text-blue font-open-sans font-light">Dystans:</span>
        <span class="text-blue font-open-sans font-semibold">{tour.distance}</span>
      </p>

      <p class="mt-2">
        <span class="text-blue font-open-sans font-light">Czas trwania:</span>
        <span class="text-blue font-open-sans font-semibold">{tour.duration}</span>
      </p>

      <div class="mt-2 flex flex-col items-center justify-between gap-2 sm:flex-row">
				<span class="w-full text-left">
					<span class="text-blue font-open-sans font-light">Cena od:</span>
					<span class="text-blue font-open-sans ml-1 font-semibold">
						{tour.price}{lang === 'pl' ? 'zł' : '€'}
					</span>
				</span>

        <span
          class="md:w-full rounded-full bg-orange-500 px-6 py-1 text-center text-xs font-bold text-white transition group-hover:bg-orange-600 md:px-6 md:text-sm"
        >
					DOŁĄCZ
				</span>
      </div>
    </div>
  </div>
</a>
