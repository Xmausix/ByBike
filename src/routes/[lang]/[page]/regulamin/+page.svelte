<script>
  import PageWrapper from '$lib/components/PageWrapper.svelte';
  import terms from '$lib/i18n/terms.json';

  export let data;
  const t = terms[data.lang];
</script>

<PageWrapper title={t.title}>
  {#each t.sections as s}
    <h2>{s.h}</h2>
    <p>{s.p}</p>
  {/each}
</PageWrapper>
