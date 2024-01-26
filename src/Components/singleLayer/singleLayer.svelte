<script>
    import { AccordionItem, getModalStore} from '@skeletonlabs/skeleton';
    import IoIosInformationCircleOutline from 'svelte-icons/io/IoIosInformationCircleOutline.svelte';
    import IoMdAdd from 'svelte-icons/io/IoMdAdd.svelte'
    import Details from '../layerDetails/details.svelte';
    import {PUBLIC_API_URL} from "$env/static/public";
    import {selectedLayers, lossFunction, optFunction, alloptLayers, alllossLayers, lrScheduleFunction, allLrSchedulerLayers} from "./../../store/stores";
    
    const modalStore = getModalStore();
    export let layername; 
    let layer_details = [];
    let changedparam = [];
    let data;
    $:data = layer_details;
    let dataChanged = null;
    $: dataChanged = dataChanged || { "layer": "", "changedParam": [], "parameters": [] };
    
 
    
    const handleLayerClick = async (e, layername) =>{
        if(e.detail.open){
                const resp = await fetch(PUBLIC_API_URL+`pytorch/param/${layername}`)
                layer_details = await resp.json() 
        }   
    }

    const modalOpen = async (layername) =>{
        let layer_doc;
        if ($alloptLayers.includes(layername)){
            const resp = await fetch(PUBLIC_API_URL+`pytorch/opt/docs/${layername}`)
            layer_doc = await resp.json() 
            }else if($allLrSchedulerLayers.includes(layername)){
                const resp = await fetch(PUBLIC_API_URL+`pytorch/lr/docs/${layername}`)
                layer_doc = await resp.json() 
            }else{
            const resp = await fetch(PUBLIC_API_URL+`pytorch/docs/${layername}`)
            layer_doc = await resp.json() }
            const modal  = {
                        type: 'alert',
                        title: layername,
                        body: `<pre>${layer_doc}</pre>`,
                        // image: 'https://i.imgur.com/WOgTG96.gif'
                    };
            modalStore.trigger(modal);
    }

    const handleInputs =(event) =>{
        let param = event.detail.param;
        if(!changedparam.includes(param) && event.detail.valueInput != "" && event.detail.valueInput) changedparam.push(param)
        if(changedparam.includes(param) && event.detail.valueInput == "" && !event.detail.valueInput) changedparam.filter(x=>x!=param)

        data = data.map((p) => {if (p.name == param) return { ...p, default: event.detail.valueInput }; else return p});
        dataChanged = {
            "layer":event.detail.name,
            "changedParam" : changedparam,
            "parameters": data
        }
    }

    const handleAddLayer = async(layername)=>{
        // console.log(dataChanged, layername)
        if (dataChanged['layer'] === layername){
            if($alllossLayers.includes(dataChanged['layer'])){
                if ($lossFunction.length<1){ lossFunction.set([dataChanged])} 
                else {alert(`${$lossFunction[0].layer} already added`)}
            } else if($alloptLayers.includes(dataChanged['layer'])){
                if ($optFunction.length<1){ optFunction.set([dataChanged])} 
                else {alert(`${$optFunction[0].layer} already added`)}
            } else if($allLrSchedulerLayers.includes(dataChanged['layer'])){
                if ($lrScheduleFunction.length<1){ lrScheduleFunction.set([dataChanged])} 
                else {alert(`${$lrScheduleFunction[0].layer} already added`)}
            }else{
                selectedLayers.update(value=>{return [...value, dataChanged]})
                changedparam=[]
            }  
        }
        else{
            const resp = await fetch(PUBLIC_API_URL+`pytorch/param/${layername}`)
            let layer_added = await resp.json() 
      
            if($alllossLayers.includes(layername)){
                if ($lossFunction.length<1) lossFunction.update(value=>[...value, {"layer":layername, "changedParam":false, "parameters":layer_added}]); else alert(`${$lossFunction[0].layer} already added`);
            } else if($alloptLayers.includes(layername)){
                if ($optFunction.length<1) optFunction.update(value=>[...value, {"layer":layername, "changedParam":false, "parameters":layer_added}]); else alert(`${$optFunction[0].layer} already added`);
            } else if($allLrSchedulerLayers.includes(layername)){
                if ($lrScheduleFunction.length<1) lrScheduleFunction.update(value=>[...value, {"layer":layername, "changedParam":false, "parameters":layer_added}]); else alert(`${$optFunction[0].layer} already added`);
            }else{
                selectedLayers.update(value=>{return [...value, {"layer":layername, "changedParam":false, "parameters":layer_added}]})
            }   
        }
        const resp = await fetch(PUBLIC_API_URL+`pytorch/param/${layername}`)
        layer_details = await resp.json() 
    }

</script>



<div class="flex justify-start w-full gap-2 items-start content-start justify-items-start">
    <button type="button" class="custom-add-button btn-icon btn-sm btn-icon-sm mt-[0.3rem]" on:click={()=>handleAddLayer(layername)}><IoMdAdd/></button>
    <AccordionItem rounded="rounded-md" class="border rounded-md border-zinc-800 w-full" transitions padding="p-2" on:toggle={(e)=>handleLayerClick(e, layername)}>
        <svelte:fragment slot="summary">
            <div class="flex w-full justify-between">
                <h6 class="text-sm">{layername}</h6> 
                <button type="button" class="btn-icon btn-sm btn-icon-sm p-0 m-0 !bg-transparent hover:text-[#f63057] w-[23px] infoButton" on:click|stopPropagation={()=>modalOpen(layername)}><IoIosInformationCircleOutline/></button>
            </div>
        </svelte:fragment>
        <svelte:fragment slot="content">
            <div class="flex w-full flex-col p-2">
                    <Details {layer_details} {layername} on:handleInputs={handleInputs}/>
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
    .infoButton:hover{
        box-shadow: 0 0 8px rgba(3, 0, 0, 0.4);
    }
</style>

