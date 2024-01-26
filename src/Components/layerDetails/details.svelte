<script>
    import { RadioGroup, RadioItem, ConicGradient  } from '@skeletonlabs/skeleton';
    import {createEventDispatcher} from 'svelte'

    const conicStops = [
	{ color: 'transparent', start: 0, end: 25 },
	{ color: 'rgb(var(--color-primary-500))', start: 75, end: 100 }];
    const dispatch = createEventDispatcher()
    export let layer_details;
    export let layername;


    const handleSendInput=(e,name)=>{
        dispatch("handleInputs", {"valueInput":e.target.value , "name": layername, "param":name})
    }



</script>

{#each layer_details as param (param)}
        {#if param.cantakeValuesType == ""}
            {#if String(param.datatype).trim()== 'int' || String(param.datatype).trim() == 'float'}
                <label for={param.name} class="text-sm mb-1">{`${param.name} (${String(param.datatype).trim()})`}{`${(!param.isOptional)? "*":""}`}</label>
                <input id={param.name} class="input rounded-md text-xs p-2 mb-4 variant-form-material" type="number" placeholder={param.name} value={(param.default)? param.default : ""} on:input={(e)=>{handleSendInput(e, param.name)}}/>
            {:else if String(param.datatype).trim() == 'bool'}
            <label for={param.name} class="text-sm">{`${param.name} (${String(param.datatype).trim()})`}{`${(!param.isOptional)? "*":""}`}</label>
            <RadioGroup id={param.name} class="mb-4 mt-0 variant-form-material" >
                <RadioItem bind:group={param.default} name="justify" value={false} class="pt-1 pb-1 pr-2 pl-2 text-xs variant-form-material" on:change={(e)=>{handleSendInput(e, param.name)}}>False</RadioItem>
                <RadioItem bind:group={param.default}  name="justify" value={true} class="pt-1 pb-1 pr-2 pl-2 text-xs variant-form-material" on:change={(e)=>{handleSendInput(e, param.name)}}>True</RadioItem>
            </RadioGroup>
            {:else}
            <label for={param.name} class="text-sm mb-1">{`${param.name} (${String(param.datatype).trim()})`}{`${(!param.isOptional)? "*":""}`}</label>
            <input id={param.name} class="input rounded-md text-xs p-2 mb-4 variant-form-material" type="text" placeholder={param.name} value={(param.default)? param.default : ""} on:input={(e)=>{handleSendInput(e, param.name)}}/>
            {/if}
        {:else}
                {#if param.cantakeValuesType=="string"}
                <label for={param.name} class="text-sm mb-1 ">{param.name}{`${(!param.isOptional)? "*":""}`}</label>
                <select class="select rounded-md text-xs p-2 mb-4 variant-form-material" on:change={(e)=>{handleSendInput(e, param.name)}}>
                    {#each param.cantakeValues as opt (opt)}
                        <option value={opt}>{opt}</option>
                    {/each}
                </select>
                {:else}
                    <label for={param.name} class="text-sm mb-1 ">{param.name}{`${(!param.isOptional)? "*":""}`}</label>
                    <input type="range" class="rounded-md text-xs p-2 mb-4 variant-form-material" value={param.values[0]} max={param.values[1]} on:input={(e)=>{handleSendInput(e, param.name)}}/>
                {/if}
        {/if}
    {:else}
        <ConicGradient stops={conicStops} spin width="w-10">Loading</ConicGradient>
{/each}
