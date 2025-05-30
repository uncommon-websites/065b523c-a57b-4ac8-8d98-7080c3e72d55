<!--

@component CustomerCardHero

This hero displays a row of customers. If used, we don't need a testimonial section on the same page.

It should ALWAYS have between 3 and 5 customers!
-->

<script lang="ts">
	// Components
	import AnimateText from "$lib/components/animation/AnimateText.svelte";
	import Button from "$lib/components/ui/Button.svelte";

	// Constants
	import { cta } from "$lib/navigation";
	import { onMount } from "svelte";
	import StakeholderCard from "../sub/StakeholderCard.svelte";
	import { animate, stagger } from "motion";

	let cards: HTMLElement[] = $state([]);

	// Types
	type Props = {
		centered?: boolean;
		title: string;
		subtitle: string;
		customers: Array<{
			name: string;
			position?: string;
			imageSrc: string;
		}>;
		callsToAction?: Array<{
			href: string;
			label: string;
		}>; // A maximum of two calls to action, with the first one being primary and the second one being secondary
	};

	let {
		title,
		subtitle,
		customers = [],
		callsToAction = [cta],
		centered = false,
		...rest
	}: Props = $props();

	onMount(() => {
		animate(
			cards,
			{
				y: [32, 0],
				scale: [0.95, 1],
				filter: ["blur(8px)", "blur(0px)"],
				opacity: [0, 1]
			},
			{
				duration: 0.8,
				ease: [0.16, 1, 0.3, 1], // Apple's preferred easing
				delay: stagger(0.08, {
					startDelay: 0.3,
					ease: "easeOut"
				})
			}
		);
	});
</script>

<div class="bg-background" {...rest}>
	<header
		class={[
			"section-px container mx-auto grid items-end gap-16 gap-y-9 text-balance",
			centered ? "place-items-center py-16 text-center" : "mb-12 pt-24 xl:grid-cols-[1fr_auto]"
		]}
		data-enter-container
	>
		<div class="grid max-w-prose gap-6">
			<h1 class="text-display w-full text-balance" data-enter>
				<span class="block"><AnimateText text={title} /></span>
			</h1>

			<p
				data-enter
				class={[
					"text-muted-foreground text-headline block  max-w-[45ch] text-pretty transition duration-500 ease-out",
					centered && "mx-auto"
					// isTitleComplete ? "opacity-100" : "translate-y-2 opacity-0 blur-sm"
				]}
			>
				{subtitle}
			</p>
		</div>

		{#if callsToAction.length > 0}
			<div class="flex gap-4" data-enter>
				{#each callsToAction as cta, index}
					<Button
						href={cta.href}
						size="lg"
						variant={index % 2 === 0 ? "primary" : "secondary"}
						class="max-lg:hidden">{cta.label}</Button
					>
					<Button
						href={cta.href}
						size="md"
						variant={index % 2 === 0 ? "primary" : "secondary"}
						class="lg:hidden">{cta.label}</Button
					>
				{/each}
			</div>
		{/if}
	</header>

	<div class="relative mt-16 px-4">
		<!-- Desktop: Perfectly aligned grid with subtle depth -->
		<div class="hidden lg:block">
			<div class="mx-auto max-w-6xl">
				<div class="grid grid-cols-5 gap-6">
					{#each customers as customer, index}
						<div 
							class="group relative transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-105"
							style:animation-delay="{index * 100}ms"
						>
							<StakeholderCard bind:cards {...customer} {index} />
							<!-- Subtle shadow for depth -->
							<div class="absolute inset-0 -z-10 rounded-xl bg-black/5 blur-xl transition-all duration-500 group-hover:bg-black/10 group-hover:blur-2xl"></div>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<!-- Tablet: 3-2 grid layout -->
		<div class="hidden md:block lg:hidden">
			<div class="mx-auto max-w-4xl space-y-6">
				<!-- First row: 3 cards -->
				<div class="grid grid-cols-3 gap-6">
					{#each customers.slice(0, 3) as customer, index}
						<div 
							class="group relative transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-105"
							style:animation-delay="{index * 100}ms"
						>
							<StakeholderCard bind:cards {...customer} {index} />
							<div class="absolute inset-0 -z-10 rounded-xl bg-black/5 blur-xl transition-all duration-500 group-hover:bg-black/10 group-hover:blur-2xl"></div>
						</div>
					{/each}
				</div>
				<!-- Second row: 2 cards centered -->
				{#if customers.length > 3}
					<div class="grid grid-cols-2 gap-6 mx-auto max-w-md">
						{#each customers.slice(3) as customer, index}
							<div 
								class="group relative transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-105"
								style:animation-delay="{(index + 3) * 100}ms"
							>
								<StakeholderCard bind:cards {...customer} index={index + 3} />
								<div class="absolute inset-0 -z-10 rounded-xl bg-black/5 blur-xl transition-all duration-500 group-hover:bg-black/10 group-hover:blur-2xl"></div>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</div>

		<!-- Mobile: Single column with perfect spacing -->
		<div class="md:hidden">
			<div class="mx-auto max-w-sm space-y-4">
				{#each customers as customer, index}
					<div 
						class="group relative transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-102"
						style:animation-delay="{index * 100}ms"
					>
						<StakeholderCard bind:cards {...customer} {index} />
						<div class="absolute inset-0 -z-10 rounded-xl bg-black/5 blur-xl transition-all duration-500 group-hover:bg-black/10 group-hover:blur-2xl"></div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
