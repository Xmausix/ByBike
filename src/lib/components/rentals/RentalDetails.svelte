<script>
	import MapFrame from '../tours/MapFrame.svelte';
	import RentalDescription from './RentalDescription.svelte';
	import RentalMenu from './RentalMenu.svelte';
	import RentalRules from './RentalRules.svelte';

	let { rental,tabs ,lang} = $props();
</script>

<RentalMenu tabs={tabs} rental={rental} {lang} />
<RentalDescription {rental}{lang}/>
<MapFrame mapLocation={rental.mapLocation} address={rental.address} />
<RentalRules rules={rental.rules} {lang}/>