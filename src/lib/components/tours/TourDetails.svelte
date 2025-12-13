<script>
  import MapFrame from './MapFrame.svelte';
  import TourDescription from './TourDescription.svelte';
  import TourGallery from './TourGallery.svelte';
  import ToursMenu from './ToursMenu.svelte';
  import TopSection from './TopSection.svelte';

  let { tour, categories, lang } = $props();
</script>

<ToursMenu {categories} {tour} {lang} />

<div class="max-w-7xl">
  <h3 class="font-haboro-soft text-size-24 text-blue pl-21 mt-10">
    {tour.name}
  </h3>
</div>

<TopSection {tour} />
<TourDescription {tour} />
<MapFrame mapLocation={tour.mapLocation} address={tour.address} />
<TourGallery />
