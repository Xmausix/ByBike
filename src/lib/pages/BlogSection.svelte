<!-- Główny komponent bloga -->
<script>
	import BigBlogCard from '$lib/components/BigBlogCard.svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';
	import MobileBlogCard from '$lib/components/MobileBlogCard.svelte';

	const { posts, lang } = $props();
</script>

<div class="w-full py-12">
	<h1 class="font-haboro-soft text-size-32 text-orange mb-12 text-center font-bold">Blog</h1>

	{#if posts.length === 0}
		<p class="text-center text-gray-500">Brak wpisów do wyświetlenia.</p>
	{:else}
		<div class="flex flex-col items-center gap-6 lg:hidden">
			{#each posts.slice(0, 2) as post}
				<MobileBlogCard {post} {lang} />
			{/each}
		</div>

		<!-- Używamy grid zamiast flex -->
		<div class="hidden gap-8 lg:grid lg:grid-cols-10">
			<!-- Lewa duża karta - zajmuje 6 kolumn -->
			<div class="lg:col-span-4">
				<BigBlogCard post={posts[0]} {lang} />
			</div>

			<!-- Prawa kolumna z 3 mniejszymi kartami - zajmuje 4 kolumny -->
			<div class="flex flex-col gap-10 lg:col-span-6">
				{#each posts.slice(1, 4) as post}
					<BlogCard {post} {lang} />
				{/each}
			</div>
		</div>
	{/if}
</div>
