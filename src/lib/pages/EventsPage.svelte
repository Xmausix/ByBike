<script>
	import { t } from 'svelte-i18n';

</script>
<section class="text-center my-8">
	<h1 class="mb-2 text-4xl">{$t('home.title')}</h1>
	<p class="text-gray-500 text-xl">Twój idealny Event zaczyna się w Gdańsku!</p>
</section>

<section class="flex flex-row justify-center gap-4 my-8 flex-wrap">
	<img
		src="https://via.placeholder.com/300x200"
		alt="Event 1"
		class="w-[600px] max-w-full rounded-lg object-cover"
	/>
	<img
		src="https://via.placeholder.com/300x200"
		alt="Event 2"
		class="w-[600px] max-w-full rounded-lg object-cover"
	/>
</section>

<section class="text-center max-w-[800px] my-8 mx-auto">
	<h2 class="text-3xl mb-4">Morze możliwości!</h2>
	<p class="text-lg text-gray-500">
		Programy naszych wycieczek prowadzone są zarówno na terenie Trójmiasta, jak i w jego okolicach.
		Odkryjemy przed Wami piękne i malownicze regiony Kaszub, Żuław Wiślanych, a nawet dojedziemy na
		Hel.
	</p>
</section>

<section class="flex items-center justify-center gap-8 my-12 flex-wrap">
	<div class="flex-1 max-w-[500px]">
		<h2 class="text-3xl mb-4">Czemu Gdansk By Bike?</h2>
		<p class="text-lg text-gray-500">
			Chcesz zorganizować wymarzony event w Gdańsku? Połącz integrację z aktywnie spędzonym czasem.
			Skontaktuj się z nami, a pomożemy Ci wybrać najlepszy program rowerowy dla Twojej grupy. Nie
			ważne, czy potrzebujesz program dla 5 czy dla 150 osób, mamy rowerowe rozwiązania dla każdej
			grupy.
		</p>
	</div>
	<div class="flex-1 max-w-[500px] w-full rounded-lg object-cover">
		<img
			src="https://via.placeholder.com/300x200"
			alt="Dlaczego Gdansk By Bike"
			class="w-[600px] max-w-full rounded-lg object-cover"
		/>
	</div>
</section>

<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
    <img
        src="https://via.placeholder.com/300x200"
        alt="Event 4"
        class="w-full max-w-[500px] h-auto rounded-lg object-cover mx-auto"
    />
    <img
        src="https://via.placeholder.com/300x200"
        alt="Event 4"
        class="w-full max-w-[500px] h-auto rounded-lg object-cover mx-auto"
    />
    <img
       src="https://via.placeholder.com/300x200"
        alt="Event 4"
        class="w-full max-w-[500px] h-auto rounded-lg object-cover mx-auto"
    />
</section>
