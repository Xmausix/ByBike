<script>
	import BlogCard from '$lib/components/MobileBlogCard.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import BlogSection from '$lib/pages/BlogSection.svelte';
	import TourCard from '$lib/components/TourCard.svelte';
	import About from '$lib/components/About.svelte';

	let { posts, lang } = $props();

	let langPrefix = $derived(lang === 'pl' ? '/pl' : '');
</script>

<section id="hero" class="pb-10">
	<Hero {lang} />
</section>
<section id="onas" class="py-10">
	<About {lang} />
</section>
<section id="wydarzenia" class="overflow-hidden py-20 text-white lg:overflow-visible">
	<TourCard {lang} />
</section>
<section id="blog" class="mt-10">
	<BlogSection {posts} {lang} />
</section>
<section id="galeria" class="py-20">
	<Gallery {lang} />
</section>
