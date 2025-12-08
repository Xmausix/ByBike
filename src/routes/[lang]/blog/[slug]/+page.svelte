<script>
	import BlogPost from '$lib/components/blog/BlogPost.svelte';

	let { data } = $props();
	let post = data.post;
</script>
<BlogPost {post} />