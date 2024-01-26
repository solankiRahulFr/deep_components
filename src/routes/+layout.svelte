<script>
	import '../app.postcss';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Modal, AppShell, LightSwitch, RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import Logo from '$lib/logo512.png';
	import { onMount } from 'svelte';
	initializeStores();

	let installationRef = "";

	$:if($page.url.pathname === '/pytorch'){
		installationRef = "https://pytorch.org/get-started/locally/"
		}else if($page.url.pathname === '/flax'){
		installationRef = 	"https://flax.readthedocs.io/en/latest/index.html#installation"
		}else{
			installationRef = "https://pytorch.org/cppdocs/installing.html"
		}
</script>

<nav class="fixed w-full z-10 bg-[#dfe0e2] dark:bg-[#15171f] m-0 p-0 top-0">
	<div class="flex justify-between items-center pt-2 pb-2 pr-4 pl-4">
		<a href="/"><img src={Logo} alt="logo" class="w-12" /></a>
		<div class="flex justify-between items-center gap-5">
			{#if $page.url.pathname !== '/'}
			<a href={installationRef} target="_blank" type="button" class="btn btn-sm variant-ghost-secondary text-xs">Installation/ Docs</a>
			{/if}
			<TabGroup
				justify="justify-center"
				active="variant-filled-primary"
				hover="hover:variant-soft-primary"
				flex="flex-1 lg:flex-none"
				rounded="rounded-lg"
				border=""
				class="w-[13rem] inline-flex flex-row gap-1 bg-surface-200-700-token border-token border-surface-400-500-token rounded-token"
			>
				<TabAnchor href="/pytorch" selected={$page.url.pathname === '/pytorch'} class="text-base text-center cursor-pointer px-4 py-1 rounded-token hover:variant-soft-primary text-xs">
					<span class="text-xs">Pytorch</span>
				</TabAnchor>
				<TabAnchor href="/flax" selected={$page.url.pathname === '/flax'} class="text-base text-center cursor-pointer px-4 py-1 rounded-token hover:variant-soft-primary text-xs">
					<span class="text-xs">Flax</span>
				</TabAnchor>
				<TabAnchor href="/libtorch" selected={$page.url.pathname === '/libtorch'} class="text-base text-center cursor-pointer px-4 py-1 rounded-token hover:variant-soft-primary text-xs">
					<span class="text-xs">Libtorch</span>
				</TabAnchor>
			</TabGroup>
			<LightSwitch />
		</div>
	</div>
</nav>
<Modal rounded="rounded-md" width="w-9/12" class="custom-modal" height="h-[80lvh]" />
<slot />

<style>
	:global(.custom-modal article) {
		overflow-y: scroll;
		height: 100%;
		max-height: 80%;
		padding-left: 0.3rem;
		padding-right: 0.3rem;
	}
	:global(.custom-modal article pre) {
		white-space: pre-wrap;
	}
	:global(.custom-modal article) {
		white-space: pre-wrap;
	}
</style>
