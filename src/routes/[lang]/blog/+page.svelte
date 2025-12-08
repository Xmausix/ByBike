<script>
	import BlogCard from '$lib/components/blog/BlogCard.svelte';

	let { data } = $props();
	
</script>

<div>
	<div class="relative mb-4 md:mb-10 lg:mb-20 h-[200px] w-full overflow-hidden rounded-b-3xl md:h-[400px]">
	<!-- Zdjęcie jako tło -->
	<img
		src="/hero11280.avif"
		alt="Blog"
		class="absolute inset-0 z-0 h-full w-full object-cover"
	/>

	<!-- Gradient na dole -->
	<div
		class="pointer-events-none absolute bottom-0 left-0 z-10 h-1/2 w-full"
		style="background: linear-gradient(to top, rgba(0,0,0,0.55), transparent); border-radius: 0 0 1.5rem 1.5rem;"
	></div>

	<!-- Treść -->
		<div class="relative z-20 flex h-full flex-col justify-end text-white md:p-10">
			<h2
				class="text-size-14 md:text-size-26 font-haboro-soft mb-6 ml-10 leading-tight font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] md:ml-20"
			>
				Blog
			</h2>
		</div>
</div>
	{#if data.posts.length === 0}
		<p>Brak wpisów do wyświetlenia.</p>
	{:else}
		<div class="mx-auto grid max-w-7xl grid-cols-1 gap-12 p-4 sm:grid-cols-2 md:grid-cols-3">
			{#each data.posts as post}
				<BlogCard {post} lang={data.lang} />
			{/each}
		</div>
	{/if}
</div>
