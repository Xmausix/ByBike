<script>
  import { t } from "svelte-i18n";
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import { getLocalizedPath } from "$lib/translations/helper.js";
  import { infoStore } from "$lib/stores/infoStore.js";

  let lang = page.params.lang;

  let info;
  infoStore.subscribe(v => info = v);

  $: safeInfo = {
    phone: info?.phone || '+48 123 456 789',
    whatsAppNr: info?.whatsAppNr || '+48 123 456 789',
    addressComp: info?.addressComp || 'Ul. Chlebnicka 19/20',
    addressFund: info?.addressFund || '80-830 Gdańsk',
    openHour: info?.openHour || '9:00 – 17:00'
  };

  function gotoRentals() {
    goto(getLocalizedPath("/rentals", lang));
  }
</script>

<div class="bg-[#F5F9FF] px-4 py-8 md:px-8 lg:px-12 text-blue font-open-sans leading-[1.35]">

  <!-- Nagłówek główny -->
  <h2 class="font-haboro-soft font-bold text-xl md:text-2xl lg:text-[26px] mb-2">
    {$t("contact.header")}
  </h2>

  <!-- nazwa firmy -->
  <p class="font-haboro-soft text-lg font-bold mb-1">
    Gdańsk By Bike
  </p>

  <!-- adres – mniejsze odstępy, jak na screenie -->
  <p class="text-sm md:text-base font-light mb-[2px]">
    {safeInfo.addressComp}
  </p>
  <p class="text-sm md:text-base font-light mb-4">
    {safeInfo.addressFund}
  </p>

  <!-- godziny -->
  <p class="text-sm md:text-base mb-2">
    <span class="font-bold">{$t("contact.openingHours")} </span>
    <span class="font-light">{safeInfo.openHour}</span>
  </p>

  <!-- telefon -->
  <p class="text-sm md:text-base mb-2">
    <span class="font-bold">{$t("contact.phone")} </span>
    <span class="font-light">{safeInfo.phone}</span>
  </p>

  <!-- WhatsApp -->
  <p class="text-sm md:text-base mb-4">
    <span class="font-bold">WhatsUp: </span>
    <span class="font-light">{safeInfo.whatsAppNr}</span>
  </p>

  <!-- CTA -->
  <p class="text-sm md:text-base font-light mb-4">
    {$t("contact.get-bike")}
  </p>

  <!-- przycisk -->
  <button
    onclick={gotoRentals}
    class="bg-orange text-white font-haboro-soft rounded-full px-5 py-2 text-xs md:text-sm font-bold uppercase hover:bg-orange-600 transition"
  >
    {$t("contact.button-text")}
  </button>
</div>
