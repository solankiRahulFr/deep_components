<script>
   import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton'; 
   import {selectedLayers, lossFunction, optFunction, epoch, batchSize, lrScheduleFunction, lr} from "./../../store/stores";
   let value = 0;
   let layerSelected, optimizer, lossFunc, lrScheduler;
    $:layerSelected=$selectedLayers
    $:lossFunc=$lossFunction
    $:optimizer=$optFunction
    $:lrScheduler=$lrScheduleFunction

    
</script>
<div >
    <div class="flex justify-between items-start">
        <h4 class="h4 mb-4">Model</h4>
        <!-- <RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
            <RadioItem bind:group={value} name="justify" value={0} class="pt-1 pb-1 pr-3 pl-3 text-xs">Details</RadioItem>
            <RadioItem bind:group={value} name="justify" value={1} class="pt-1 pb-1 pr-3 pl-3 text-xs">Code</RadioItem>
        </RadioGroup> -->
    </div>
    <p>Epochs : {$epoch}</p>
    <p>Batch size : {$batchSize}</p>
    <p>Learning rate : {$lr}</p>
    {#if lossFunc.length > 0}
        {#if lossFunc[0].changedParam}
            <p>Loss : {lossFunc[0].layer}
                ({#each lossFunc[0].changedParam as ch}
                {#each lossFunc[0].parameters as p, i}
                    {#if p.name==ch}
                        {`${p.name}: ${p.default}`} {#if lossFunc[0].changedParam.length-1 > i},{/if}
                    {/if}
                {/each}
            {/each})</p>
        {:else}
            <p>Loss : {lossFunc[0].layer}()</p>
        {/if}
    {/if}
    {#if optimizer.length > 0}
        {#if optimizer[0].changedParam}
            <p>Optimizer : {optimizer[0].layer} 
                ({#each optimizer[0].changedParam as ch}
                {#each optimizer[0].parameters as p, i}
                    {#if p.name==ch}
                        {`${p.name}: ${p.default}`} {#if optimizer[0].changedParam.length-1 > i},{/if}
                    {/if}
                {/each}
            {/each})</p>
        {:else}
            <p>Optimizer : {optimizer[0].layer}(model.parameters(), lr={$lr})</p>
        {/if}
    {/if} 
    {#if lrScheduler.length > 0}
    {#if lrScheduler[0].changedParam}
        <p>learning rate Scheduler : {lrScheduler[0].layer} 
            ({#each lrScheduler[0].changedParam as ch}
            {#each lrScheduler[0].parameters as p, i}
                {#if p.name==ch}
                    {`${p.name}: ${p.default}`} {#if lrScheduler[0].changedParam.length-1 > i},{/if}
                {/if}
            {/each}
        {/each})</p>
    {:else}
        <p>learning rate Scheduler : {lrScheduler[0].layer}(optimizer)</p>
    {/if}
{/if} 
    
    
    <ol class="list">
        {#if $selectedLayers.length > 0}
            <p>Layers</p>
                {#each $selectedLayers as ly, i (i)}
                    <li>
                        {#if ly.changedParam}
                        <span class="flex-auto">
                        {i+1}: 
                        {ly.layer}
                        ({#each ly.changedParam as ch}
                            {#each ly.parameters as p, i}
                                {#if p.name==ch}
                                    {`${p.name}: ${p.default}`} {#if ly.changedParam.length-1 > i},{/if}
                                {/if}
                            {/each}
                        {/each})
                        </span>
                        {:else}
                        <span class="flex-auto">{i+1}: {ly.layer}()</span>
                        {/if}
                    </li>
                {/each}
            {/if}
    </ol>

</div>

<style>
p, span{
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
}
.list span {
    margin-bottom: -1px;
}

</style>