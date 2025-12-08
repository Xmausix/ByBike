<script>
	import { t } from 'svelte-i18n';
	let { mapLocation, address } = $props();
</script>

<div class="border-blue/10 my-12 w-full rounded-[64px] border-[24px] bg-transparent p-8">
	<div class="flex min-h-[300px] flex-col gap-8 lg:flex-row">
		<!-- Mapa Google Maps -->
		<div class="h-100 w-[700px] flex-shrink-0 overflow-hidden">
			<iframe
				class="h-full w-full border-0"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
				src={mapLocation}
				allowfullscreen
				title="Mapa"
			></iframe>
		</div>
		<!-- Napisy -->
		<div class="flex flex-1 flex-col items-center justify-end pb-4">
			<p class="text-size-20 text-blue font-haboro-soft">MIEJSCE SPOTKANIA:</p>
			<p class="text-size-18 text-blue font-haboro-soft font-light">
				{address.toUpperCase()}
			</p>
		</div>
	</div>
</div>
