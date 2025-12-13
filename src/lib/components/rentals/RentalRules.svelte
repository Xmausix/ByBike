<script>
  export let rules = [];
</script>

<section class="text-white w-full">
  <h2 class="font-haboro-soft text-lg md:text-xl lg:text-3xl font-bold">
    Zasady wypożyczalni
  </h2>

  <ul class="mt-4 space-y-3">
    {#each rules as rule}
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 bg-orange-500 rounded-full mt-1"></span>
        <p class="font-open-sans text-sm md:text-base opacity-90 leading-relaxed">
          {rule}
        </p>
      </li>
    {/each}
  </ul>
</section>
