<script>
	import { page } from '$app/state';
	import slugify from 'slugify';
	const { post, lang } = $props();
	let slug = slugify(post.title, {
		lower: true,
		strict: true,
		locale: 'pl'
	});
</script>

<a
	href={`${lang}/blog/${slug}`}
	class="bg-blue relative flex h-[550px] max-w-[34rem] flex-col overflow-hidden rounded-[3rem] text-white"
>
	<!-- Obrazek -->
	<div class="w-full flex-[2]">
		<img
			src={post.imageUrl}
			alt={post.title}
			loading="lazy"
			class="h-full w-full rounded-b-[4rem] object-cover"
		/>
	</div>

	<!-- Niebieskie pole -->
	<div class="flex flex-[1] items-center justify-between px-8 py-4">
		<h2 class="text-xl leading-tight font-bold">{post.title}</h2>
	</div>

	<!-- Przycisk w prawym dolnym rogu -->
	<span
		class="bg-orange p- absolute right-6 bottom-6 flex items-center justify-center rounded-[2rem] transition hover:bg-orange-600"
		aria-label="Zobacz wpis"
	>
		<svg
			id="Layer_1"
			enable-background="new 0 0 48 48"
			viewBox="0 0 48 48"
			width="48"
			height="48"
			class="h-10 w-10"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			><path
				d="m27.9 11.2 15.8 12c.5.4.5 1.2 0 1.6l-15.8 12c-.4.3-.8.2-1 .1-.4-.2-.5-.5-.5-.9v-6c0-.5-.5-1-1-1h-20.4c-.5 0-1-.5-1-1v-8c0-.5.4-1 1-1h20.4c.5 0 1-.5 1-1v-6c0-.4.2-.7.5-.9.1-.1.5-.2 1 .1z"
			/></svg
		>
	</span>
</a>
