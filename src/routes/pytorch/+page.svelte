<script>
	import Layers from "../../Components/Layers/layers.svelte";
	import SelectedLayers from "../../Components/selectedLayer/selectedLayers.svelte";
	import LayoutCode from "../../Components/modelLayout/layoutCode.svelte"
</script>

<div class="flex flex-wrap justify-center items-start gap-5 m-4 mt-16 min-h-96 h-[88vh]">
	<div class="w-[32%] card p-4 rounded text-wrap overflow-y-scroll h-full min-w-96">
		<Layers/>
	</div>
	<div class="w-[32%] card p-4 rounded text-wrap overflow-y-scroll h-full min-w-96">
		<SelectedLayers/></div>
	<div class="w-[32%] card p-4 rounded text-wrap overflow-y-scroll h-full min-w-96">
	<LayoutCode/>
</div>
  </div>

