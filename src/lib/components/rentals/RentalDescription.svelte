<script>
  export let description = '';
  export let features = [];
</script>

<section class="text-white w-full">
  <h2 class="font-haboro-soft text-lg md:text-xl lg:text-3xl font-bold">
    Opis
  </h2>

  <p class="font-open-sans text-sm md:text-base lg:text-lg mt-3 opacity-90 leading-relaxed">
    {description}
  </p>

  {#if features.length}
    <ul class="mt-6 space-y-2">
      {#each features as feature}
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-orange-500 rounded-full mt-1"></span>
          <span class="font-open-sans text-sm md:text-base opacity-90">
						{feature}
					</span>
        </li>
      {/each}
    </ul>
  {/if}
</section>
