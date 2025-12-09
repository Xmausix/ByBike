<script>
  import { t } from "svelte-i18n";

  // BEZPIECZNY INPUT
  export let Info = {};

  // FALLBACKI → NIC NIE WYBUCHA
  const phoneList = Array.isArray(Info.phone)
    ? Info.phone
    : [];

  const addressFund = Array.isArray(Info.addressFund)
    ? Info.addressFund
    : ["", "", ""];

  const nipVat = Array.isArray(Info.nipVat)
    ? Info.nipVat
    : [];

  const openHour = Info.openHour || "";

  export let lang = "pl";

  const termsAndConditionsPath = "/terms-and-conditions";
  const privacyPolicyPath = "/privacy-policy";
  const faqPath = "/faq";
</script>

<footer class="bg-blue text-white text-[13px]">
  <div class="max-w-7xl mx-auto w-full px-6 pt-16 pb-6 flex flex-col gap-10">

    <!-- DESKTOP -->
    <div class="hidden lg:flex justify-between items-start w-full">

      <!-- Kontakt -->
      <div class="flex flex-col gap-1 min-w-[200px]">
        <h3 class="uppercase font-semibold tracking-wide mb-4">KONTAKT:</h3>

        {#each phoneList as number}
          <a
            href={`tel:${number.replace(/\s+/g, '')}`}
            class="font-open-sans leading-relaxed hover:underline"
          >
            {number}
          </a>
        {/each}

        <a
          href="mailto:contact@polandbylocals.com"
          class="font-open-sans leading-relaxed hover:underline"
        >
          contact@polandbylocals.com
        </a>
      </div>

      <!-- Adres -->
      <div class="flex flex-col gap-1 min-w-[220px]">
        <h3 class="uppercase font-semibold tracking-wide mb-4">ADRES:</h3>

        <p>Fundacja Aktywni Lokalnie</p>
        <p>{addressFund[0]}</p>
        <p>{addressFund[1]} {addressFund[2]}</p>

        <div class="mt-6">
          {#each nipVat as value, i}
            <p class="py-[2px]">
              <span class="font-semibold">
                {i === 0 ? "NIP" : i === 1 ? "NIP EU" : "KRS"}:
              </span>
              &nbsp;{value}
            </p>
          {/each}
        </div>
      </div>

      <!-- Godziny -->
      <div class="flex flex-col gap-1 min-w-[200px]">
        <h3 class="uppercase font-semibold tracking-wide mb-4">GODZINY OTWARCIA:</h3>
        <p>Pon–Nd {openHour}</p>
      </div>

      <!-- Inicjatywa -->
      <div class="flex flex-col min-w-[200px]">
        <h3 class="uppercase font-semibold tracking-wide mb-4">INICJATYWA:</h3>
        <enhanced:img
          src="/static/fal-logo.png"
          class="w-[220px] h-auto mt-4"
          alt="Fundacja"
        />
      </div>

      <!-- Członkowie -->
      <div class="flex flex-col min-w-[200px]">
        <h3 class="uppercase font-semibold tracking-wide mb-4">JESTEŚMY CZŁONKAMI:</h3>
        <enhanced:img
          src="/static/visit-gdansk.png"
          class="w-[260px] h-auto mt-4"
          alt="Visit Gdańsk"
        />
      </div>

    </div>

    <!-- MOBILE -->
    <div class="lg:hidden flex flex-col gap-8">

      <!-- Kontakt + Godziny -->
      <div class="flex justify-between">
        <div class="flex flex-col">
          <h3 class="font-semibold uppercase text-size-10 mb-3">KONTAKT:</h3>
          {#each phoneList as number}
            <a class="py-1 hover:underline" href={`tel:${number.replace(/\s+/g, '')}`}>{number}</a>
          {/each}
          <a class="py-1 hover:underline" href="mailto:contact@polandbylocals.com">contact@polandbylocals.com</a>
        </div>

        <div class="flex flex-col">
          <h3 class="font-semibold uppercase text-size-10 mb-3">GODZINY OTWARCIA:</h3>
          <p>Pon–Nd {openHour}</p>
        </div>
      </div>

      <!-- Adres + Inicjatywa -->
      <div class="flex justify-between">
        <div class="flex flex-col">
          <h3 class="font-semibold uppercase text-size-10 mb-3">ADRES:</h3>
          <p>Fundacja Aktywni Lokalnie</p>
          <p>{addressFund[0]}</p>
          <p>{addressFund[1]} {addressFund[2]}</p>

          <div class="mt-4">
            {#each nipVat as value, i}
              <p class="py-[2px]">
                <span class="font-semibold">
                  {i === 0 ? "NIP" : i === 1 ? "NIP EU" : "KRS"}:
                </span>
                &nbsp;{value}
              </p>
            {/each}
          </div>
        </div>

        <enhanced:img
          src="/static/fal-logo.png"
          class="w-[180px] h-auto mt-3"
          alt="Fundacja"
        />
      </div>

      <!-- Członkowie -->
      <div>
        <h3 class="font-semibold uppercase text-size-10 mb-3">JESTEŚMY CZŁONKAMI:</h3>
        <enhanced:img
          src="/static/visit-gdansk.png"
          class="w-[230px] mx-auto mt-3"
          alt="Visit Gdańsk"
        />
      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-white opacity-60 w-full"></div>

    <!-- Bottom -->
    <div class="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-10 text-center">

      <div class="flex gap-2 flex-wrap justify-center">
        <a href={termsAndConditionsPath} class="hover:underline">{$t('tc', lang)}</a>
        <span class="text-orange">•</span>

        <a href={privacyPolicyPath} class="hover:underline">{$t('privacy', lang)}</a>
        <span class="text-orange">•</span>

        <a href={faqPath} class="hover:underline">{$t('faq', lang)}</a>
      </div>

      <div class="flex gap-1 flex-wrap justify-center">
        <p>Copyright 2025 Gdańsk By Bike ©</p>
        <span class="text-orange">•</span>

        <p>All Rights Reserved</p>
        <span class="text-orange">•</span>

        <p>
          Designed by
          <a class="text-orange hover:underline" target="_blank" href="https://baxy.it">Baxy IT</a>
          &nbsp;&amp;&nbsp;
          <a class="text-orange hover:underline" href="mailto:agnieszkamariamazur@gmail.com">AMM</a>
        </p>
      </div>

    </div>

  </div>
</footer>
