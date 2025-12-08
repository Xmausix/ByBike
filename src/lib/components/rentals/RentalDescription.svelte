<script>
	let { rental, lang } = $props();
	let iframeEl;
	let iframeContainer;
	function handleIframeLoad() {
		if (iframeEl) {
			try {
				const iframeDoc = iframeEl.contentDocument || iframeEl.contentWindow.document;
				const body = iframeDoc.body;
				const html = iframeDoc.documentElement;

				// Znajdź rzeczywistą wysokość zawartości
				const actualHeight = Math.max(
					body.scrollHeight,
					body.offsetHeight,
					html.clientHeight,
					html.scrollHeight,
					html.offsetHeight
				);

				// Ustaw wysokość iframe na rzeczywistą wysokość zawartości
				iframeEl.style.height = actualHeight + 'px';

				console.log(`Iframe content height: ${actualHeight}px`);
			} catch (error) {
				console.log('Cannot access iframe content (CORS), using fallback height');
				// Fallback - większa wysokość na wypadek wielu wycieczek
				iframeEl.style.height = '1200px';
			}
		}
	}


</script>

<div class="mx-auto max-w-7xl px-6 py-12 font-sans">
	<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
		<div class="text-blue space-y-6 md:col-span-2">
			<h2 class="font-haboro-soft text-3xl">{rental.name}</h2>
			<p class="font-open-sans font-light whitespace-pre-line">{rental.heroLine}</p>
			<p class="font-open-sans font-light whitespace-pre-line">{rental.description}</p>
			<div
				bind:this={iframeContainer}
				class="relative ml-12 h-[400px] w-[400px] rounded-tr-[30px] rounded-br-[30px] bg-gray-100 text-center"
			>
				<div class="h-full overflow-x-hidden overflow-y-auto">
					<iframe
						bind:this={iframeEl}
						src={rental.fareHarborUrl}
						width="100%"
						height="800"
						frameborder="0"
						scrolling="no"
						title="Kalendarz wycieczek"
						class="border-0"
						onload={handleIframeLoad}
					>
					</iframe>
				</div>
			</div>
		</div>
		<div class="text-blue space-y-4 text-sm">
			<div class="flex justify-end">
				<button
					class="bg-orange rounded-full px-8 py-2 font-semibold text-white transition hover:bg-orange-600"
					onclick={openRegulations}
				>
					Od {rental.price}{lang === 'pl' ? 'zł' : '€'}/dzień
				</button>
			</div>

			<div class="flex flex-col items-start gap-1 text-left">
				<div class="bg-orange mb-1 rounded-full p-2 text-white">
					<svg
						class="h-6 w-6"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						viewBox="0 0 24 24"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3" />
						<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" />
					</svg>
				</div>
				<p>{rental.collectionText}</p>
			</div>

			<div class="flex flex-col items-start gap-1 text-left">
				<div class="bg-orange mb-1 rounded-full p-2 text-white">
					<svg
						class="h-6 w-6"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						viewBox="0 0 24 24"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3" />
						<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" />
					</svg>
				</div>
				<p>{rental.dropOffText}</p>
			</div>

			<p class="text-blue font-open-sans font-bold">Wliczone w cenę:</p>
			<ul class="text-blue font-open-sans list-inside list-disc">
				{#each rental.extras as extra}
					<li>{extra}</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
