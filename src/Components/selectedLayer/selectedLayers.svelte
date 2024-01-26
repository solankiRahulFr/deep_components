<script>
    import { Accordion} from '@skeletonlabs/skeleton';
    import SingleSelectedLayer from "../singleLayer/singleSelectedLayer.svelte";
    import {selectedLayers, lossFunction, optFunction, epoch, batchSize, alloptLayers, alllossLayers, lrScheduleFunction, allLrSchedulerLayers, lr} from "./../../store/stores";
    let ep=$epoch, bts=$batchSize, lrate=$lr;
    $:epoch.set(ep)
    $:batchSize.set(bts)
    $:lr.set(lrate)
    const handleremoveLayer = (e) => { 
            if($alloptLayers.includes(e.detail.layer)){
                optFunction.set([])
            }else if($alllossLayers.includes(e.detail.layer)){
                lossFunction.set([])
            }else if($allLrSchedulerLayers.includes(e.detail.layer)){
                lrScheduleFunction.set([])
            }
            else{
                selectedLayers.update(value=>{
                    value.splice(e.detail.key, 1)
                    return value})
                
            }
     }

</script>

<div>
    <h4 class="h4">Model</h4>
    <div class="my-4">
        <label for="Epoch" class="text-sm mb-1">Number of epoch</label>
        <input id="Epoch" bind:value={ep} class="input rounded-md text-xs p-2" type="number" placeholder=""/>
    </div>
    <div class="my-4">
        <label for="batchSize" class="text-sm mb-1">Batch size</label>
        <input id="batchSize" bind:value={bts} class="input rounded-md text-xs p-2" type="number" placeholder=""/>
    </div>
    <div class="my-4">
        <label for="batchSize" class="text-sm mb-1">Learning rate</label>
        <input id="batchSize" bind:value={lrate} class="input rounded-md text-xs p-2" type="number" placeholder=""/>
    </div>
    <div class="card p-2 rounded-md my-4 variant-ringed">
        <h6 class="h6 mb-2">Loss functions</h6>
        <Accordion>
            {#each $lossFunction as ly,i (i)}
                <SingleSelectedLayer key={i} addedLayer={ly} layername={ly.layer} on:removeLayer={handleremoveLayer}/>
            {/each} 
        </Accordion>

    </div>
    <div class="card p-2 rounded-md my-4 variant-ringed">
        <h6 class="h6 mb-2">Optimizers</h6>
        <Accordion>
            {#each $optFunction as ly,i (i)}
                <SingleSelectedLayer key={i} addedLayer={ly} layername={ly.layer} on:removeLayer={handleremoveLayer}/>
            {/each} 
        </Accordion>
    </div>
    <div class="card p-2 rounded-md my-4 variant-ringed">
        <h6 class="h6 mb-2">Learning rate scheduler</h6>
        <Accordion>
            {#each $lrScheduleFunction as ly,i (i)}
                <SingleSelectedLayer key={i} addedLayer={ly} layername={ly.layer} on:removeLayer={handleremoveLayer}/>
            {/each} 
        </Accordion>
    </div>
    <div class="card p-2 rounded-md my-4 variant-ringed">
        <h6 class="h6 mb-2">Selected Layers</h6>
        <Accordion>
            {#if $selectedLayers.length > 0}
                {#each $selectedLayers as ly,index (index)}
                    <SingleSelectedLayer key={index} addedLayer={ly} layername={ly.layer} on:removeLayer={handleremoveLayer}/>
                {/each} 
            {/if} 
        </Accordion>
    </div>
</div>



<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous">
</svelte:head>