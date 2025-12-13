<script>
  import RentalCard from '$lib/components/rentals/RentalCard.svelte';
  import RentalLongCard from '$lib/components/rentals/RentalLongCard.svelte';
  import BikeBg from '$lib/components/rentals/BikeBg.svelte';

  let { rentalCategories, lang } = $props();

  const featured = rentalCategories[0];
  const second = rentalCategories[1];
  const long = rentalCategories[2];
  const rest = rentalCategories.slice(3);
  console.log("RENTAL DATA:", data.rental);
</script>

<!-- HERO -->
<section class="relative mb-10 h-[260px] w-full overflow-hidden rounded-b-3xl md:h-[420px]">
  <img src="/hero11280.avif" alt="Wypożyczalnia" class="absolute inset-0 h-full w-full object-cover" />

  <div
    class="absolute bottom-0 left-0 h-1/2 w-full"
    style="background: linear-gradient(to top, rgba(0,0,0,0.55), transparent);"
  ></div>

  <div class="relative z-20 flex h-full items-end p-6 md:p-12 text-white">
    <h1 class="font-haboro-soft text-size-22 md:text-size-32 font-bold drop-shadow-lg">
      Wybierz sprzęt<br />idealny dla Ciebie
    </h1>
  </div>
</section>

<!-- MOBILE -->
<div class="md:hidden relative">
  <BikeBg variant="top" />

  <div class="mx-2 grid grid-cols-2 gap-4">
    <RentalCard rental={featured} {lang} />
    <RentalCard rental={second} {lang} />
  </div>

  <BikeBg variant="middle" />
  <RentalLongCard rental={long} {lang} />

  <div class="mx-2 grid grid-cols-2 gap-4 mt-6">
    {#each rest as rental}
      <RentalCard {rental} {lang} />
    {/each}
  </div>

  <BikeBg variant="bottom" />
  <div class="pb-24"></div>
</div>

<!-- DESKTOP -->
<div class="hidden md:grid max-w-7xl mx-auto mt-12 mb-32 gap-10 grid-cols-3 relative">
  <BikeBg desktop />

  <RentalCard rental={featured} {lang} />
  <RentalCard rental={second} {lang} />
  <RentalLongCard rental={long} class="col-span-3" {lang} />

  {#each rest as rental}
    <RentalCard {rental} {lang} />
  {/each}
</div>
