<!-- BigBlogCard komponent -->
<script>
	import slugify from 'slugify';
	let { post, lang } = $props();
	let slug = slugify(post.title, {
		lower: true,
		strict: true,
		locale: 'pl'
	});
</script>

<a
	href={`${lang}/blog/${slug}`}
	class="bg-blue flex h-full max-w-400 flex-col overflow-hidden rounded-[3rem] text-white"
>
	<img src={post.imageUrl} alt={post.title} class="h-80 w-full object-cover" />

	<div class="flex flex-grow flex-col gap-6 p-8">
		<h2 class="text-3xl leading-tight font-bold">{post.title}</h2>
		<p class="text-base leading-relaxed">{post.description}</p>

		<div class="mt-auto flex justify-end">
			<span
				class="bg-orange inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold text-white transition hover:bg-orange-600"
			>
				WIĘCEJ
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					class="h-7 w-7"
					viewBox="0 0 24 24"
				>
					<path
						fill-rule="evenodd"
						d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
						clip-rule="evenodd"
					/>
				</svg>
			</span>
		</div>
	</div>
</a>
