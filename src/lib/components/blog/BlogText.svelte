<script>
	export let title = 'Zapraszamy na rowerową przygodę po Gdańsku!';

	export let paragraph1 = `Odkrywanie Gdańska na rowerze to świetny sposób, by cieszyć się urokiem miasta i malowniczymi okolicami. Możesz przejechać się wzdłuż nadmorskich ścieżek lub pokręcić się po starych uliczkach Gdańska.`;

	export let paragraph2 = `Wszystkie opisane destynacje w Gdańsku to płaskie trasy i krótkie wycieczki, więc idealny będzie tradycyjny rower trekkingowy. Natomiast jeśli chcesz zwiedzać w całkiem łatwy sposób możemy zaproponować Ci rower elektryczny. Ułatwia podróżowanie i sprawia, że jest jeszcze przyjemniejsze.`;

	export let paragraph3 = `<span class="font-extrabold">Dlaczego wybrać Gdańsk By Bike?</span>
W Gdańsk By Bike dbamy o to, aby Twoja przygoda rowerowa była komfortowa i pełna radości. Nasz przyjazny zespół pomoże Ci wybrać idealny rower i podzieli się wskazówkami dotyczącymi trasy. Nasze rowery są w pełni sprawne i bardzo wygodne.`;

	export let paragraph4 = `Każde wypożyczenie obejmuje solidne blokady, kask oraz sakwy jeśli ich potrzebujesz. Nasza flota obejmuje wysokiej jakości rowery trekkingowe, elektryczne rowery trekkingowe oraz miejskie rowery elektryczne. Są one zaprojektowane z myślą o komforcie i niezawodności, co sprawia, że jesteśmy idealnym punktem startowym dla Twojej przygody!`;
</script>

<section class="text-blue font-open-sans mx-auto max-w-5xl px-6 py-12 text-justify">
	<h2 class="font-haboro-soft mb-6 text-center text-md md:text-lg lg:text-2xl">{title}</h2>

	<p class="font-open-sans mb-5 whitespace-pre-line text-xs md:text-sm lg:text-lg font-light">{paragraph1}</p>
	<p class="font-open-sans mb-5 whitespace-pre-line text-xs md:text-sm lg:text-lg font-light">{paragraph2}</p>
	<p class="font-open-sans mb-5 whitespace-pre-line text-xs md:text-sm lg:text-lg font-light">{@html paragraph3}</p>
	<p class="font-open-sans mb-5 whitespace-pre-line text-xs md:text-sm lg:text-lg font-light">{paragraph4}</p>
</section>
