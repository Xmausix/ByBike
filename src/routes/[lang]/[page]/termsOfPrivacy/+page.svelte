<script>
  import PageWrapper from '$lib/components/PageWrapper.svelte';
  import privacy from '$lib/i18n/privacy.json';

  export let data;
  const t = privacy[data.lang];
</script>

<PageWrapper title={t.title}>
  {#each t.sections as s}
    <h2>{s.h}</h2>
    <p>{s.p}</p>
  {/each}
</PageWrapper>
