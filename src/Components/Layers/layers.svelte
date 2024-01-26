<script>
    import { Accordion, ConicGradient  } from '@skeletonlabs/skeleton';
    import SingleLayer from "./../singleLayer/singleLayer.svelte";
    import MdSearch from 'svelte-icons/md/MdSearch.svelte'
    import { onMount } from 'svelte';
    import { PUBLIC_API_URL, PUBLIC_URL } from '$env/static/public';
    const conicStops = [
	{ color: 'transparent', start: 0, end: 25 },
	{ color: 'rgb(var(--color-primary-500))', start: 75, end: 100 }];
    let searchValue = ""
    let layers = []
    let layerShow = []
    console.log(PUBLIC_URL)
    onMount(async ()=>{
        const resp = await fetch(PUBLIC_URL+'pytorch/allLayers')
        layers = await resp.json()
        layerShow = layers
    })

    $:if(searchValue===""){
            layerShow = layers
        }
        else{
            layerShow = layers.filter(str => (str.toLowerCase()).includes(searchValue.toLowerCase()))
        }
    

</script>

<div class="relative w-full">
    <div>
        <h4 class="h4">Layers</h4>
        <div class="relative w-full mb-4 mt-4">
            <input bind:value={searchValue} autocomplete="off"  type="search" id="search-dropdown" class="block p-2 w-full z-20 text-sm text-gray-900 bg-transparent rounded-md border-s-2 border focus:ring-[#c0b6b4] focus:border-[#c0b6b4] light:border-slate-900 dark:bg-transparent dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search Layers" required>
            <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white rounded-e-lg hover:text-[#d4163c]">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </button>
        </div>
    </div>
   
    <Accordion class="overflow-y-scroll h-[70lvh]">
        {#each layerShow as layer, i (i)}
            <SingleLayer layername={layer}/>
        {:else}
            <ConicGradient stops={conicStops} spin width="w-10">Loading</ConicGradient>
        {/each}
    </Accordion>
</div>

