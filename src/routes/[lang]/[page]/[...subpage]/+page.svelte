<script>
	import RentalDetails from '$lib/components/rentals/RentalDetails.svelte';
  import TourDetails from '$lib/components/tours/TourDetails.svelte';
  let { data } = $props();
</script>

{#if data.tour}
  <TourDetails tour={data.tour} categories={data.categories} lang={data.lang}/>
{:else if data.rental}
  <RentalDetails rental={data.rental} lang={data.lang} tabs={data.uniqueCategoryKeys}  />
{/if}
