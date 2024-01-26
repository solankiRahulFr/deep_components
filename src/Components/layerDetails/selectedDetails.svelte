<script>
    import { RadioGroup, RadioItem, ConicGradient  } from '@skeletonlabs/skeleton';
    import {selectedLayers, lossFunction, optFunction, alloptLayers, alllossLayers, lrScheduleFunction, allLrSchedulerLayers} from "./../../store/stores";
    import pkg from 'lodash';
    const {debounce} = pkg;
    const conicStops = [
	{ color: 'transparent', start: 0, end: 25 },
	{ color: 'rgb(var(--color-primary-500))', start: 75, end: 100 }];

    export let layer_details;
    export let key;
    export let layername;
    let isParamChanged = false;
    let changedOptFunction, changedLossFunction, changedSelectedLayers, changedLrScheduleLayer;
    changedOptFunction = $optFunction;
    changedLossFunction= $lossFunction;
    changedSelectedLayers = $selectedLayers;
    changedLrScheduleLayer = $lrScheduleFunction;

    const handleSendInput=(e,name, index, layer)=>{
         if($alloptLayers.includes(layer)){   
            if(changedOptFunction[0].changedParam && !changedOptFunction[0].changedParam.includes(name)) changedOptFunction[0].changedParam.push(name)
            if(changedOptFunction[0].changedParam && changedOptFunction[0].changedParam.includes(name) && (e.target.value == "" || !e.target.value)) changedOptFunction[0].changedParam = changedOptFunction[0].changedParam.filter(x=>x!=name)
            // if(!changedOptFunction[0].changedParam) val = {layer:layer, changedParam:[name], parameters:changedOptFunction[0].parameters}
            let val = changedOptFunction[0].parameters.map(x=>{if(x.name==name) return {...x, default:e.target.value}; else return x})
            if(!changedOptFunction[0].changedParam){
                changedOptFunction= [{...changedOptFunction[0],changedParam:[name], parameters:val}]
            }else{
                changedOptFunction= [{...changedOptFunction[0], parameters:val}]
            }
        }else  if($alllossLayers.includes(layer)){   
            if(changedLossFunction[0].changedParam && !changedLossFunction[0].changedParam.includes(name)) changedLossFunction[0].changedParam.push(name)
            if(changedLossFunction[0].changedParam && changedLossFunction[0].changedParam.includes(name) && (e.target.value == "" || !e.target.value)) changedLossFunction[0].changedParam = changedLossFunction[0].changedParam.filter(x=>x!=name)
            // if(!changedLossFunction[0].changedParam) val = {layer:layer, changedParam:[name], parameters:changedLossFunction[0].parameters}
            let val = changedLossFunction[0].parameters.map(x=>{if(x.name==name) return {...x, default:e.target.value}; else return x})
            if(!changedLossFunction[0].changedParam){
                changedLossFunction= [{...changedLossFunction[0],changedParam:[name], parameters:val}]
            }else{
                changedLossFunction= [{...changedLossFunction[0], parameters:val}]
            }
        } else  if($allLrSchedulerLayers.includes(layer)){   
            if(changedLrScheduleLayer[0].changedParam && !changedLrScheduleLayer[0].changedParam.includes(name)) changedLrScheduleLayer[0].changedParam.push(name)
            if(changedLrScheduleLayer[0].changedParam && changedLrScheduleLayer[0].changedParam.includes(name) && (e.target.value == "" || !e.target.value)) changedLrScheduleLayer[0].changedParam = changedLrScheduleLayer[0].changedParam.filter(x=>x!=name)
            // if(!changedLrScheduleLayer[0].changedParam) val = {layer:layer, changedParam:[name], parameters:changedLrScheduleLayer[0].parameters}
            let val = changedLrScheduleLayer[0].parameters.map(x=>{if(x.name==name) return {...x, default:e.target.value}; else return x})
            if(!changedLrScheduleLayer[0].changedParam){
                changedLrScheduleLayer= [{...changedLrScheduleLayer[0],changedParam:[name], parameters:val}]
            }else{
                changedLrScheduleLayer= [{...changedLrScheduleLayer[0], parameters:val}]
            }
        }
        else{
            if(changedSelectedLayers[index].changedParam && !changedSelectedLayers[index].changedParam.includes(name)) changedSelectedLayers[index].changedParam.push(name)
            if(changedSelectedLayers[index].changedParam && changedSelectedLayers[index].changedParam.includes(name) && (e.target.value == "" || !e.target.value)) changedSelectedLayers[index].changedParam = changedSelectedLayers[index].changedParam.filter(x=>x!=name)
            // if(!changedSelectedLayers[index].changedParam) val = {layer:layer, changedParam:[name], parameters:changedSelectedLayers[index].parameters}
            let val = changedSelectedLayers[index].parameters.map(x=>{if(x.name==name) return {...x, default:e.target.value}; else return x})
            if(!changedSelectedLayers[index].changedParam){
                changedSelectedLayers[index]= {...changedSelectedLayers[index],changedParam:[name], parameters:val}
            }else{
                changedSelectedLayers[index]= {...changedSelectedLayers[index], parameters:val}
            }
        }
    }
    const handleUpdateParam = () =>{
        if(isParamChanged){
            optFunction.set(changedOptFunction)
            lossFunction.set(changedLossFunction)
            selectedLayers.set(changedSelectedLayers)
            lrScheduleFunction.set(changedLrScheduleLayer)
            isParamChanged=false
        }
        else{
            isParamChanged=true
        }
    }

</script>



<button type="button" class="btn btn-sm rounded-md variant-ghost-secondary text-xs mb-2" on:click={handleUpdateParam}>{isParamChanged?"Update":"Edit"}</button>
{#each layer_details as param (param)}
        {#if param.cantakeValuesType == ""}
            {#if String(param.datatype).trim()== 'int' || String(param.datatype).trim() == 'float'}
                <label for={param.name} class="text-sm mb-1">{`${param.name} (${String(param.datatype).trim()})`}{`${(!param.isOptional)? "*":""}`}</label>
                <input id={param.name} disabled={!isParamChanged} class="input rounded-md text-xs p-2 mb-4 variant-form-material" type="number" placeholder={param.name} value={(param.default)? param.default : ""} on:input={(e)=>{handleSendInput(e, param.name, key, layername)}}>
            {:else if String(param.datatype).trim() == 'bool'}
            <label for={param.name} class="text-sm">{`${param.name} (${String(param.datatype).trim()})`}{`${(!param.isOptional)? "*":""}`}</label>
            <RadioGroup id={param.name} class="mb-4 mt-0 variant-form-material" >
                <RadioItem bind:group={param.default} disabled={!isParamChanged} name="justify" value={false} class="pt-1 pb-1 pr-2 pl-2 text-xs variant-form-material" on:change={(e)=>{handleSendInput(e, param.name, key, layername)}}>False</RadioItem>
                <RadioItem bind:group={param.default} disabled={!isParamChanged}  name="justify" value={true} class="pt-1 pb-1 pr-2 pl-2 text-xs variant-form-material" on:change={(e)=>{handleSendInput(e, param.name, key, layername)}}>True</RadioItem>
            </RadioGroup>
            {:else}
            <label for={param.name} class="text-sm mb-1">{`${param.name} (${String(param.datatype).trim()})`}{`${(!param.isOptional)? "*":""}`}</label>
            <input id={param.name} disabled={!isParamChanged} class="input rounded-md text-xs p-2 mb-4 variant-form-material" type="text" placeholder={param.name} value={(param.default)? param.default : ""} on:input={(e)=>{handleSendInput(e, param.name, key, layername)}}/>
            {/if}
        {:else}
                {#if param.cantakeValuesType=="string"}
                <label for={param.name} class="text-sm mb-1 ">{param.name}{`${(!param.isOptional)? "*":""}`}</label>
                <select class="select rounded-md text-xs p-2 mb-4 variant-form-material" disabled={!isParamChanged} on:change={(e)=>{handleSendInput(e, param.name, key, layername)}}>
                    {#each param.cantakeValues as opt (opt)}
                        <option value={opt}>{opt}</option>
                    {/each}
                </select>
                {:else}
                    <label for={param.name} class="text-sm mb-1 ">{param.name}{`${(!param.isOptional)? "*":""}`}</label>
                    <input disabled={!isParamChanged} id={param.name} type="range" class="rounded-md text-xs p-2 mb-4 variant-form-material" value={param.values[0]} max={param.values[1]} on:input={(e)=>{handleSendInput(e, param.name, key, layername)}}/>
                {/if}
        {/if}
    {:else}
        <ConicGradient stops={conicStops} spin width="w-10">Loading</ConicGradient>
{/each}
