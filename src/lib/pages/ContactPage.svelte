<script>
	import ContactData from '$lib/components/contacts/ContactData.svelte';
	import Payments from '$lib/components/contacts/Payments.svelte';
	import { t } from 'svelte-i18n';
</script>

<div>
	<div class="relative h-[200px] w-full overflow-hidden rounded-b-3xl md:h-[400px] lg:mb-20">
		<!-- Zdjęcie jako tło -->
		<img
			src="/hero11280.avif"
			alt="Contact Us"
			class="absolute inset-0 z-0 h-full w-full object-cover"
		/>

		<!-- Gradient na dole -->
		<div
			class="pointer-events-none absolute bottom-0 left-0 z-10 h-1/2 w-full"
			style="background: linear-gradient(to top, rgba(0,0,0,0.55), transparent); border-radius: 0 0 1.5rem 1.5rem;"
		></div>

		<!-- Treść -->
		<div class="relative z-20 flex h-full flex-col justify-end p-6 text-white md:p-10">
			<h2
				class="text-size-20 md:text-size-26 font-haboro-soft mb-6 ml-20 leading-tight font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
			>
				{$t('contact.title')}
			</h2>
		</div>
	</div>
	<!-- Grid 2x2 -->
	<div class="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
		<div class="flex items-center justify-center">
			<img
				src="/gbb-logo.png"
				alt="Gdańsk by Bike logo"
				class="hidden h-auto w-90 max-w-full lg:block"
			/>
		</div>
		<div class="my-10 flex items-start justify-center lg:justify-start">
			<ContactData />
		</div>
		<div class="flex items-start justify-center">
			<img src="/fal-logo2.png" alt="FAL logo" class="hidden h-auto w-110 max-w-full lg:block" />
		</div>
		<div class="flex items-start justify-center lg:justify-start">
			<Payments />
		</div>
	</div>
</div>
