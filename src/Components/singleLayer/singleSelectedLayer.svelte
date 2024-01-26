<script>
    import { AccordionItem, getModalStore} from '@skeletonlabs/skeleton';
    import MdRemove from 'svelte-icons/md/MdRemove.svelte'
    import SelectedDetails from '../layerDetails/selectedDetails.svelte';
    import {createEventDispatcher} from "svelte"
    const dispatch = createEventDispatcher()
    const modalStore = getModalStore();


    export let layername; 
    export let key; 
    export let addedLayer = []
    let selecteddata, LayerIndex, changedparam = [], dataChanged = null;
    // $: dataChanged = dataChanged || { "layer": "", "changedParam": [], "parameters": [] };
    $:selecteddata = addedLayer;
    $:LayerIndex = key;
</script>



<div class="flex justify-start w-full gap-2 items-start content-start justify-items-start">
    <button type="button" class="custom-add-button btn-icon btn-sm btn-icon-sm mt-[0.3rem]" on:click={()=>dispatch("removeLayer", {"layer":layername, "key":LayerIndex})}><MdRemove/></button>
    <AccordionItem rounded="rounded-md" class="border rounded-md border-zinc-800 w-full" transitions padding="p-2">
        <svelte:fragment slot="summary">
            <div class="flex w-full justify-between">
                <h6 class="text-sm">{layername}</h6> 
                <!-- <button type="button" class="btn-icon btn-sm btn-icon-sm p-0 m-0 !bg-transparent hover:text-[#f63057] w-[23px] infoButton">Edit Param</button> -->
            </div>
        </svelte:fragment>
        <svelte:fragment slot="content">
            <div class="flex w-full flex-col p-2">
                <SelectedDetails key={LayerIndex} layer_details={selecteddata.parameters} {layername}/>
            </div>
        </svelte:fragment>
        
    </AccordionItem>
           
    
</div>




<style>
    .custom-add-button{
        color:#d4163c;
    }
    .custom-add-button:hover{
        color:#f63057;
    }
</style>

