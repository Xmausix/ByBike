<script>
	import slugify from 'slugify';

	let { post, lang } = $props();
	let slug=slugify(post.title, {
		lower: true,
		strict: true,
		locale: 'pl'
	});
</script>
<a href={`${lang}/blog/${post.slug}`} class="flex gap-6 items-start w-full">
	<img
		src={post.imageUrl}
		alt={post.title}
		class="w-85 h-60 object-cover rounded-[3rem] flex-shrink-0"
	/>

	<!-- Tekst -->
	<div class="relative flex-grow min-h-[15rem] min-w-0">
		<div class="pr-32"> <!-- odstęp na przycisk -->
			<h3 class="text-xl font-semibold text-blue leading-tight">{post.title}</h3>
			<p class="text-base text-gray-700 mt-3 line-clamp-4">{post.description}</p>
		</div>

		<!-- Przycisk w prawym dolnym rogu -->
		<span
		
			class="absolute bottom-0 right-0 inline-flex items-center gap-2 text-base font-semibold text-white bg-orange px-6 py-2.5 rounded-full hover:bg-orange-600 transition"
		>
			WIĘCEJ
			<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 h-4" viewBox="0 0 24 24">
				<path
					fill-rule="evenodd"
					d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
					clip-rule="evenodd"
				/>
			</svg>
		</span>
	</div>
</a>
