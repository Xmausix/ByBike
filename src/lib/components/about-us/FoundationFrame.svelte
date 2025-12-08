<script>
	import { t } from 'svelte-i18n';
	let {text} = $props();
</script>

<div
	class="md:my-12 w-full rounded-[64px] border-[24px] p-4 border-light-orange bg-transparent sm:p-8 text-size-10 sm:text-size-12"
>	<img src="/fal-logo2.png" alt="FAL logo" class="h-auto w-110 max-w-full pb-5 sm:hidden" />
	{@html text}

</div>
