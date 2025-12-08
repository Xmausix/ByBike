<script>
	import { t } from 'svelte-i18n';
	let { text } = $props();
</script>

<div class="flex flex-col text-size-10 sm:text-size-12" >
	{@html text}
</div>
