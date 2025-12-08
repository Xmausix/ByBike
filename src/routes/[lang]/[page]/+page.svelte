<script>
	import FAQ from '$lib/pages/FAQ.svelte';
	import ToursPage from '$lib/pages/ToursPage.svelte';
	import AboutPage from '$lib/pages/AboutPage.svelte';
	import TC from '$lib/pages/TC.svelte';
	import PrivacyPolicy from '$lib/pages/PrivacyPolicy.svelte';
	import ContactPage from '$lib/pages/ContactPage.svelte';
	import EventsPage from '$lib/pages/EventsPage.svelte';
	import TourDetails from '$lib/components/tours/TourDetails.svelte';
	import RentalPage from '$lib/pages/RentalPage.svelte';
	import { page } from '$app/state';
	import GalleryPage from '$lib/pages/GalleryPage.svelte';
	let { data } = $props();
	let currentPage = $derived(data.page);
	
</script>

{#if currentPage === 'tours' || currentPage === 'wycieczki'}
	<ToursPage tours={data.tours} categories={data.categories} lang={data.lang} />
{:else if currentPage === 'events' || currentPage === 'eventy'}
	<EventsPage />
{:else if currentPage === 'rentals' || currentPage === 'wynajem'}
	<RentalPage rentalCategories={data.rentalCategories} lang={data.lang} />
{:else if currentPage === 'contact' || currentPage === 'kontakt'}
	<ContactPage lang={data.lang} />
{:else if currentPage === 'about' || currentPage === 'o-nas'}
	<AboutPage {data} />
{:else if currentPage === 'gdansk-by-bike-wycieczki-rowerowe-w-gdansku'}
	<h1>Główna strona po polsku</h1>
{:else if currentPage === 'faq'}
	<FAQ />
{:else if currentPage === 'privacy-policy' || currentPage === 'polityka-prywatnosci'}
	<PrivacyPolicy />
{:else if currentPage === 'terms-and-conditions' || currentPage === 'regulamin'}
	<TC />
{:else if currentPage === 'gallery' || currentPage === 'galeria'}
	<GalleryPage />
{:else}
	<p>404 - Page not found</p>
{/if}
