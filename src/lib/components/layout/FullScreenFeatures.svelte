<script lang="ts">
	import { onMount } from "svelte";

	// Types
	type Feature = {
		title: string;
		description: string;
		content?: string;
		imageSrc?: string;
		imageAlt?: string;
	};

	// Props
	let { 
		title = "",
		subtitle = "",
		features = [],
		...rest 
	}: { 
		title?: string;
		subtitle?: string;
		features: Feature[];
	} = $props();

	// State
	let currentFeature = $state(0);
	let scrollProgress = $state(0);
	let wrapperRef: HTMLElement;
	let contentRef: HTMLElement;

	onMount(() => {
		// Track vertical scroll position and determine current feature
		let ticking = false;
		const handleScroll = () => {
			if (ticking) return;
			ticking = true;

			requestAnimationFrame(() => {
				if (!wrapperRef || !contentRef) return;

				const rect = wrapperRef.getBoundingClientRect();
				const sectionHeight = rect.height;
				const viewportHeight = window.innerHeight;

				// Calculate progress (0-1)
				let progress = 0;
				if (rect.top <= 0) {
					progress = Math.min(Math.abs(rect.top) / (sectionHeight - viewportHeight), 1);
				}

				scrollProgress = progress;
				
				// Determine which feature should be highlighted
				const featureIndex = Math.min(
					Math.floor(progress * features.length), 
					features.length - 1
				);
				currentFeature = Math.max(0, featureIndex);
				
				ticking = false;
			});
		};

		// Initialize scroll handler
		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Initial call

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});
</script>

<section
	bind:this={wrapperRef}
	class="relative"
	style="height: calc(100vh * {features.length + 1});"
	{...rest}
>
	<div class="sticky top-0 flex min-h-screen w-full">
		<!-- Fixed Left Sidebar with Feature List -->
		<div class="w-1/3 bg-background border-r border-border flex flex-col">
			<!-- Header -->
			{#if title || subtitle}
				<div class="section-px section-pt flex-shrink-0">
					{#if title}
						<h2 class="text-title1 mb-4">{title}</h2>
					{/if}
					{#if subtitle}
						<p class="text-body text-muted-foreground max-w-prose">{subtitle}</p>
					{/if}
				</div>
			{/if}

			<!-- Feature Navigation List -->
			<nav class="flex-1 section-px py-8">
				<ul class="space-y-6">
					{#each features as feature, index}
						<li>
							<button
								class="text-left w-full group transition-all duration-300 ease-out"
								class:opacity-100={currentFeature === index}
								class:opacity-40={currentFeature !== index}
								onclick={() => {
									// Scroll to the corresponding feature
									const targetScroll = (index / features.length) * (wrapperRef.scrollHeight - window.innerHeight);
									window.scrollTo({
										top: wrapperRef.offsetTop + targetScroll,
										behavior: 'smooth'
									});
								}}
							>
								<div 
									class="border-l-2 pl-4 py-2 transition-all duration-300 ease-out"
									class:border-primary={currentFeature === index}
									class:border-transparent={currentFeature !== index}
								>
									<h3 
										class="text-headline font-medium transition-colors duration-300 ease-out"
										class:text-foreground={currentFeature === index}
										class:text-muted-foreground={currentFeature !== index}
									>
										{feature.title}
									</h3>
									<p 
										class="text-body mt-1 transition-colors duration-300 ease-out"
										class:text-muted-foreground={currentFeature === index}
										class:text-muted-foreground/60={currentFeature !== index}
									>
										{feature.description}
									</p>
								</div>
							</button>
						</li>
					{/each}
				</ul>
			</nav>

			<!-- Progress Indicator -->
			<div class="section-px section-pb-sm flex-shrink-0">
				<div class="w-full bg-border rounded-full h-1">
					<div 
						class="bg-primary h-1 rounded-full transition-all duration-300 ease-out"
						style="width: {scrollProgress * 100}%"
					></div>
				</div>
			</div>
		</div>

		<!-- Right Content Area -->
		<div 
			bind:this={contentRef}
			class="flex-1 relative overflow-hidden"
		>
			{#each features as feature, index}
				<div
					class="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out"
					class:opacity-100={currentFeature === index}
					class:opacity-0={currentFeature !== index}
					class:translate-y-0={currentFeature === index}
					class:translate-y-4={currentFeature !== index}
				>
					{#if feature.imageSrc}
						<!-- Image Content -->
						<div class="w-full h-full relative">
							<img
								src={feature.imageSrc}
								alt={feature.imageAlt || feature.title}
								class="w-full h-full object-cover"
								loading="lazy"
							/>
							
							<!-- Optional overlay content -->
							{#if feature.content}
								<div class="absolute inset-0 bg-black/40 flex items-center justify-center">
									<div class="section-px max-w-2xl text-center text-white">
										<div class="text-body leading-relaxed">
											{@html feature.content}
										</div>
									</div>
								</div>
							{/if}
						</div>
					{:else}
						<!-- Text Content -->
						<div class="section-px max-w-2xl text-center">
							<h3 class="text-title2 mb-6">{feature.title}</h3>
							<div class="text-body text-muted-foreground leading-relaxed space-y-4">
								{#if feature.content}
									{@html feature.content}
								{:else}
									<p>{feature.description}</p>
								{/if}
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!--
@component
A full-screen feature section with a fixed navigation list on the left and scrollable content on the right.
As you scroll, the corresponding feature is highlighted in the left navigation.

Usage:
```html
<FullScreenFeatures
  title="Section Title"
  subtitle="Section subtitle"
  features={[
    {
      title: "Feature Title",
      description: "Short description for navigation",
      content: "Detailed content or HTML for the right panel",
      imageSrc: "/optional-image.jpg", // optional
      imageAlt: "Image description" // optional
    }
    // more features...
  ]}
/>
```

Features:
- Fixed left sidebar with feature navigation
- Smooth scrolling between features
- Progress indicator
- Support for both text and image content
- Responsive design
- Follows design system variables
-->

<style>
	/* Ensure smooth scrolling behavior */
	@media (prefers-reduced-motion: no-preference) {
		html {
			scroll-behavior: smooth;
		}
	}

	/* Mobile responsiveness */
	@media (max-width: 768px) {
		section {
			/* Stack vertically on mobile */
		}
		
		section :global(.sticky) {
			flex-direction: column;
		}
		
		section :global(.w-1\/3) {
			width: 100%;
			height: auto;
			position: relative;
		}
		
		section :global(.flex-1) {
			width: 100%;
			min-height: 50vh;
		}
	}
</style>