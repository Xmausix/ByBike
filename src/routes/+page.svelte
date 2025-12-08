<script>
	import HomePage from '$lib/pages/HomePage.svelte';

	let { data } = $props();
</script>

<HomePage posts={data.posts} lang={data.lang} />
