<script>
	import Crane from '$lib/components/Crane.svelte';
</script>

<div class="relative mx-auto my-10 max-w-7xl rounded-[30px] overflow-hidden">
	<div class="group transition-transform duration-500 hover:scale-105">
		<div class="grid grid-cols-3 gap-x-12 gap-y-4">
			<!-- Duże zdjęcie -->
			<div class="col-span-2 row-span-2">
				<img
					src="/hero11280.avif"
					alt="Duże zdjęcie"
					class="h-[calc(24rem+16px)] w-full object-cover"
				/>
			</div>
			<!-- Małe zdjęcia -->
			<div class="h-48">
				<img src="/hero11280.avif" alt="Prawe górne" class="h-full w-full object-cover" />
			</div>
			<div class="h-48">
				<img src="/hero11280.avif" alt="Prawe dolne" class="h-full w-full object-cover" />
			</div>
		</div>
		<div
			class="pointer-events-none absolute top-1/2 -left-50 z-20 flex w-300 -translate-y-1/2 justify-center transition-transform duration-500 group-hover:-translate-y-75"
		>
			<Crane class="h-full w-full" />
		</div>
	</div>
</div>
