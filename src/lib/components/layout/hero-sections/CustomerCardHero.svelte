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
				// y: ["50%", 0],
				scale: [0.9, 1],
				filter: ["blur(4px)", "blur(0px)"],
				opacity: [0, 1]
			},
			{
				duration: 0.5,
				ease: "easeOut",
				delay: stagger(0.1, {
					startDelay: 0.5,
					ease: "easeInOut"
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

	<div class="relative mt-8 px-4">
		<!-- Desktop: Overlapping card layout -->
		<div class="hidden lg:block">
			<div class="relative mx-auto max-w-4xl">
				{#each customers as customer, index}
					<div 
						class="absolute transition-all duration-300 hover:z-10 hover:scale-105"
						style:left="{index * 15}%"
						style:top="{index % 2 === 0 ? '0' : '2rem'}"
						style:z-index="{customers.length - index}"
					>
						<StakeholderCard bind:cards {...customer} {index} />
					</div>
				{/each}
				<!-- Spacer to maintain height -->
				<div class="invisible">
					<StakeholderCard {...customers[0]} index={0} />
				</div>
				<div class="h-8"></div>
			</div>
		</div>

		<!-- Mobile/Tablet: Staggered grid layout -->
		<div class="lg:hidden">
			<div class="grid gap-4 md:grid-cols-2">
				{#each customers as customer, index}
					<div 
						class="transition-all duration-300"
						class:md:mt-8={index % 2 === 1}
						class:md:mt-0={index % 2 === 0}
					>
						<StakeholderCard bind:cards {...customer} {index} />
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
