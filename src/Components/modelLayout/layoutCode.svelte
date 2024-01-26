<script>
    import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
    import ModelDetails from "./modelDetails.svelte";
    import Code from "./code.svelte"
    let tabSet = 0;
</script>


<TabGroup padding="py-1 px-4" active="variant-filled-primary" hover="hover:variant-soft-primary" rounded="rounded-t-md">
	<Tab bind:group={tabSet} name="tab1" value={0} >Model Layout</Tab>
	<Tab bind:group={tabSet} name="tab2" value={1} class="codeTab">Code</Tab>
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
        <div class="overflow-y-scroll h-[75lvh]">
            <ModelDetails/>
        </div>
		{:else}
        <div class="overflow-y-scroll h-[75lvh]">
            <Code/>
        </div>
		{/if}
	</svelte:fragment>
</TabGroup>
			