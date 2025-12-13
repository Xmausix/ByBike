<script>
  export let menu = [];
  export let lang = 'pl';

  const currency = lang === 'pl' ? 'zł' : '€';
</script>

<section class="text-white w-full">
  <h2 class="font-haboro-soft text-lg md:text-xl lg:text-3xl font-bold">
    Cennik
  </h2>

  <div class="mt-4 space-y-4">
    {#each menu as item}
      <div
        class="bg-navy border border-white/10 rounded-2xl p-4
				flex justify-between items-center"
      >
        <div class="flex items-center gap-4">
          {#if item.image}
            <img
              src={item.image}
              alt={item.name}
              class="w-14 h-14 rounded-xl object-cover"
            />
          {/if}

          <div class="flex flex-col">
						<span class="font-open-sans text-base md:text-lg font-semibold">
							{item.name}
						</span>

            {#if item.info}
							<span class="text-xs md:text-sm opacity-70">
								{item.info}
							</span>
            {/if}
          </div>
        </div>

        <span class="font-haboro-soft text-lg font-bold text-orange-400">
					{item.price}{currency}
				</span>
      </div>
    {/each}
  </div>
</section>
