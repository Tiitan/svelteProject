<script lang="ts">
    import type {DeviceData} from '$lib/DeviceData'
    import type {ControlDevice} from '$lib/ControlDevice'
    import { Input } from '@sveltestrap/sveltestrap';

    let { deviceData } : { deviceData: DeviceData } = $props();

    async function OndimRangeChanged() {
        let controlDevice: ControlDevice = {dimmable: deviceData.features.dimmable.status};
        let content = JSON.stringify(controlDevice)
        const response = await fetch(`http://192.168.1.179/device/${deviceData.id}/control`, { method: 'POST', body: content});
    }
</script>
	
<section class="shadow p-2 mb-3 bg-light rounded">
    <header class="">
        <h5 class="float-start">{deviceData.id}. {deviceData.name}</h5>
        <p class="float-end">{deviceData.line}. {deviceData.address}</p> 
    </header>
    
    <Input type="range" class="form-range" min="0" max="100" id="dimRange" bind:value={deviceData.features.dimmable.status} onchange={OndimRangeChanged}/>
</section>

