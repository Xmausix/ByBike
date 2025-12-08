<script>
	let { tour } = $props();
</script>

<div class="text-blue flex flex-col gap-12 rounded-3xl p-6 lg:flex-row">
	<!-- LEWA KOLUMNA -->
	<div class="max-w-[700px] flex-1 space-y-4">
		<h2 class="text-blue font-haboro-soft text-2xl font-bold">{tour.name}</h2>
		<p class="text-blue font-open-sans text-size-12 text-lg leading-tight font-light">
			{tour.heroLine}
		</p>
		{@html tour.description}
	</div>

	<!-- PRAWA KOLUMNA -->
	<div class="flex min-w-[250px] flex-col gap-6">
		<!-- Cena -->
		<div
			class="font-open-sans self-start rounded-full bg-orange-500 px-4 py-1 text-sm font-light text-white"
		>
			Od <span class="font-extrabold">{tour.price}{tour.lang === 'pl' ? 'zł' : '€'}</span> za osobę
		</div>

		<!-- Parametry -->
		<ul class="text-blue font-open-sans text-size-12 space-y-3">
			<li class="flex items-center gap-2">
				<span>Dystans: <strong>{tour.distance}</strong></span>
			</li>
			<li class="flex items-center gap-2">
				<span>Start: <strong>{tour.start}</strong></span>
			</li>
			<li class="flex items-center gap-2">
				<span>Czas trwania: <strong>{tour.duration}</strong></span>
			</li>
		</ul>

		<!-- W cenie -->
		<div>
			<p class="text-blue text-size-12 mb-1 leading-tight font-bold">Wliczone w cenę:</p>
			<ul
				class="text-blue font-open-sans text-size-12 list-inside list-disc space-y-1 leading-tight font-light"
			>
				{#each tour.extras as item}
					<li>{item}</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
