<script>
	import BlogSection from './BlogSection.svelte';
	import BlogText from './BlogText.svelte';

	let { post } = $props();
	console.log('BlogPost', post);
</script>

<div>
	<div
		class="relative mb-4 h-[200px] w-full overflow-hidden rounded-b-3xl md:mb-10 md:h-[400px] lg:mb-20"
	>
		<!-- Zdjęcie jako tło -->
		<img
			src="/hero11280.avif"
			alt="Wypożyczalnia"
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

	{#each post.sections as section}
		<BlogSection {section} />
	{/each}

	<BlogText />
</div>
