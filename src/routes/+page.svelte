<script lang="ts">
	import type { DeviceData } from '$lib/DeviceData'
	import Device from '../Device.svelte'
	import { onMount } from "svelte";

	let devices: DeviceData[] = $state([]);

	onMount(async () => {
		const response: Response = await fetch("http://192.168.1.179/devices");
		let data = await response.json();
		devices = data.devices
	});
	</script>
	
	<main>
		<h1>Devices</h1>
		<ul>
		{#each devices as d}
			<Device deviceData={d}/>
		{/each}
		</ul>
	</main>
	
	<style>
	
	</style>