<script>
  import ContactData from '$lib/components/contacts/ContactData.svelte';
  import Payments from '$lib/components/contacts/Payments.svelte';
  import { t } from 'svelte-i18n';
</script>

<div>

  <!-- HERO -->
  <div class="relative w-full h-[200px] md:h-[400px] overflow-hidden rounded-b-3xl lg:mb-20">

    <img
      src="/hero11280.avif"
      alt="Contact Us"
      class="absolute inset-0 z-0 w-full h-full object-cover"
    />

    <div
      class="absolute bottom-0 left-0 z-10 w-full h-1/2 pointer-events-none"
      style="background: linear-gradient(to top, rgba(0,0,0,0.55), transparent); border-radius: 0 0 1.5rem 1.5rem;"
    ></div>

    <div class="relative z-20 flex flex-col justify-end h-full p-6 md:p-10 text-white">
      <h2
        class="font-haboro-soft font-bold leading-tight text-size-20 md:text-size-26 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] mb-6 ml-20"
      >
        {$t('contact.title')}
      </h2>
    </div>

  </div>

  <!-- GRID -->
  <div class="grid grid-cols-1 gap-8 mt-8 mx-auto max-w-6xl lg:grid-cols-2">

    <!-- LOGO LEFT -->
    <div class="flex items-center justify-center">
      <img
        src="/gbb-logo.png"
        alt="Gdańsk by Bike logo"
        class="hidden lg:block w-90 max-w-full h-auto"
      />
    </div>

    <!-- CONTACT DATA -->
    <div class="flex justify-center items-start my-10 lg:justify-start">
      <ContactData />
    </div>

    <!-- LOGO RIGHT -->
    <div class="flex items-start justify-center">
      <img
        src="/fal-logo2.png"
        alt="FAL logo"
        class="hidden lg:block w-110 max-w-full h-auto"
      />
    </div>

    <!-- PAYMENTS -->
    <div class="flex justify-center items-start mx-3 my-2 lg:justify-start">
      <Payments />
    </div>

  </div>

</div>
