<script>
  import { t } from 'svelte-i18n';

  export let mapLocation = '';
  export let address = '';
</script>

<div class="border-blue/10 my-12 w-full rounded-[64px] border-[24px] bg-transparent p-6 md:p-8">
  <div class="flex min-h-[300px] flex-col gap-8 lg:flex-row items-center lg:items-stretch">

    <!-- MAPA -->
    <div class="w-full lg:w-[60%] overflow-hidden rounded-3xl flex-shrink-0">
      <iframe
        class="w-full h-[300px] md:h-[400px] lg:h-full border-0 rounded-3xl"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        src={mapLocation}
        allowfullscreen
        title="Mapa"
      ></iframe>
    </div>

    <!-- OPIS -->
    <div class="flex flex-col flex-1 items-center lg:items-start justify-center text-center lg:text-left">
      <p class="text-blue font-haboro-soft text-lg md:text-xl">
        {t('meetingPlace') || 'MIEJSCE SPOTKANIA:'}
      </p>
      <p class="text-blue font-haboro-soft font-light text-base md:text-lg mt-2">
        {address?.toUpperCase()}
      </p>
    </div>

  </div>
</div>
