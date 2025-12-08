<script>
	import slugify from 'slugify';
	import { goto } from '$app/navigation';
	import { getLocalizedPath } from '$lib/translations/helper.js';
	
	let { post, lang } = $props();
	let path = getLocalizedPath('/blog', lang);
	
	let slug = slugify(post.title, {
		lower: true,
		strict: true,
		locale: 'pl'
	});
	let blogPath = `${path}/${slug}`;
	
	function sanitizeAndLimit(htmlText, maxLength = 180) {
	// Usuń WSZYSTKIE tagi HTML
	const cleanText = htmlText
		.replace(/<[^>]*>/g, ' ') // usuń wszystkie tagi
		.replace(/\s+/g, ' ') // usuń nadmiarowe spacje
		.trim();
	
	if (cleanText.length <= maxLength) {
		return cleanText;
	}
	
	// Obetnij tekst na maxLength, ale znajdź ostatnią spację
	const truncated = cleanText.substring(0, maxLength);
	const lastSpaceIndex = truncated.lastIndexOf(' ');
	
	// Jeśli znaleziono spację, obetnij do niej, jeśli nie - użyj oryginalnej długości
	const finalText = lastSpaceIndex > 0 
		? truncated.substring(0, lastSpaceIndex)
		: truncated;
	
	return finalText+"...";
}
	const displayText = $derived(sanitizeAndLimit(post.text, 180));
</script>

<a
	href={blogPath}
	class="bg-blueish group mx-auto flex h-140 w-full flex-col overflow-hidden rounded-[64px] transition-colors duration-300"
>
	<img
		src={post.imageUrl}
		alt={post.title}
		class="h-70 w-full rounded-t-[64px] rounded-b-[64px] object-cover"
	/>
	<div class="relative flex flex-1 flex-col p-4">
		<h3 class="text-blue font-roboto text-size-18 font-haboro-soft text-left font-bold">
			{post.title}
		</h3>
		<p class="text-blue font-open-sans mt-1 flex-grow overflow-hidden text-left text-sm font-light ">
			{displayText}
		</p>
		
		<span
			class="bg-orange absolute right-10 bottom-10 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-orange-600"
		>
			WIĘCEJ
			<svg
				id="Layer_1"
				enable-background="new 0 0 48 48"
				viewBox="0 0 48 48"
				xmlns="http://www.w3.org/2000/svg"
				class="ml-1 h-auto w-5"
				fill="currentColor"
			>
				<path
					d="m27.9 11.2 15.8 12c.5.4.5 1.2 0 1.6l-15.8 12c-.4.3-.8.2-1 .1-.4-.2-.5-.5-.5-.9v-6c0-.5-.5-1-1-1h-20.4c-.5 0-1-.5-1-1v-8c0-.5.4-1 1-1h20.4c.5 0 1-.5 1-1v-6c0-.4.2-.7.5-.9.1-.1.5-.2 1 .1z"
				/>
			</svg>
		</span>
	</div>
</a>