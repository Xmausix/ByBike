<script>
  import PageWrapper from '$lib/components/PageWrapper.svelte';
  import faq from '$lib/i18n/faq.json';

  export let data;
  const t = faq[data.lang];
</script>

<PageWrapper title={t.title}>
  {#each t.items as item}
    <h2>{item.q}</h2>
    <p>{item.a}</p>
  {/each}
</PageWrapper>
