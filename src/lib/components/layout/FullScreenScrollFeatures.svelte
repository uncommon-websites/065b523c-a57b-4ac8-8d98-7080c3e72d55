<script lang="ts">
	// Types
	type Feature = {
		title: string;
		description: string;
		image: string;
	};

	// Props
	let { title, subtitle, features, ...rest }: { title: string; subtitle?: string; features: Feature[] } = $props();

	// State
	let current = $state(0);
	let scrollProgress = $state(0);
	let wrapperRef: HTMLElement;
	let contentRef: HTMLElement;
	let maxScrollDistance = $state(0);

	import { onMount } from "svelte";

	onMount(() => {
		// Preload images
		features.forEach((feature) => {
			if (feature.image) {
				const img = new Image();
				img.loading = "lazy";
				img.src = feature.image;
			}
		});

		// Calculate the max scroll distance for translation
		const updateDimensions = () => {
			if (!contentRef) return;

			// Get all content sections and container measurements
			const sections = Array.from(contentRef.querySelectorAll("article"));
			if (!sections.length) return;

			// Get the total width of all content including gaps
			const contentWidth = contentRef.scrollWidth;
			// Get the viewport width
			const viewportWidth = window.innerWidth;

			// To ensure the last section is fully visible at the end of the scroll,
			// we need to make sure the last section's right edge aligns with the viewport's right edge
			maxScrollDistance = Math.max(0, contentWidth - viewportWidth);

			if (maxScrollDistance <= 0) {
				console.info("Content fits in viewport, no scrolling needed");
			}
		};

		// Track vertical scroll position and convert to horizontal scroll
		let ticking = false;
		const handleScroll = () => {
			if (ticking) return;
			ticking = true;

			requestAnimationFrame(() => {
				if (!wrapperRef) return;

				const rect = wrapperRef.getBoundingClientRect();
				const sectionHeight = rect.height;
				const viewportHeight = window.innerHeight;

				// Calculate progress (0-1)
				let progress = 0;
				if (rect.top <= 0) {
					progress = Math.min(Math.abs(rect.top) / (sectionHeight - viewportHeight), 1);
				}

				scrollProgress = progress;
				current = Math.min(Math.floor(progress * features.length), features.length - 1);
				ticking = false;
			});
		};

		// Debounce resize handler for better performance
		let resizeTimer: number;
		const handleResize = () => {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(() => {
				updateDimensions();
				handleScroll();
			}, 100);
		};

		// Initialize and set up listeners
		updateDimensions();
		window.addEventListener("resize", handleResize);
		window.addEventListener("scroll", handleScroll);
		setTimeout(() => {
			updateDimensions(); // Run once more after DOM is settled
			handleScroll();
		}, 100);

		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("scroll", handleScroll);
			clearTimeout(resizeTimer);
		};
	});
</script>

<section
	bind:this={wrapperRef}
	class="text-pretty"
	style="height: calc(100vh * {features.length});"
	{...rest}
>
	<div class="sticky top-0 flex min-h-screen w-full overflow-hidden">
		<!-- Fixed navigation list on the left -->
		<div class="w-1/3 bg-background border-r border-border flex flex-col justify-center section-px">
			<div class="max-w-sm">
				{#if title}
					<h2 class="text-title2 lg:text-title1 xl:text-display text-foreground mb-3 lg:mb-4">{title}</h2>
				{/if}
				{#if subtitle}
					<p class="text-callout lg:text-body text-muted-foreground mb-8 lg:mb-12">{subtitle}</p>
				{/if}
				
				<nav class="space-y-6 lg:space-y-8">
					{#each features as feature, index}
						<div 
							class="transition-all duration-300 ease-out"
							class:opacity-100={current === index}
							class:opacity-40={current !== index}
						>
							<div class="flex items-start gap-3 lg:gap-4">
								<div 
									class="w-2 h-2 rounded-full mt-2 transition-all duration-300 flex-shrink-0"
									class:bg-primary={current === index}
									class:bg-muted={current !== index}
								></div>
								<div class="min-w-0">
									<h3 
										class="text-callout lg:text-headline font-medium transition-colors duration-300"
										class:text-foreground={current === index}
										class:text-muted-foreground={current !== index}
									>
										{feature.title}
									</h3>
									<p 
										class="text-caption lg:text-callout mt-1 lg:mt-2 transition-colors duration-300 line-clamp-3"
										class:text-foreground={current === index}
										class:text-muted-foreground={current !== index}
									>
										{feature.description}
									</p>
								</div>
							</div>
						</div>
					{/each}
				</nav>
			</div>
		</div>

		<!-- Scrolling content on the right -->
		<div class="w-2/3 relative overflow-hidden">
			<div
				bind:this={contentRef}
				class="flex w-full h-full"
			>
				{#each features as feature, index}
					<article
						class="relative min-w-full h-screen flex items-center justify-center transform-gpu transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
						style:transform="translateX(calc(-{scrollProgress} * {maxScrollDistance}px))"
					>
						<!-- Full screen background image -->
						<div class="absolute inset-0 z-0">
							{#if feature.image}
								<img
									src={feature.image}
									alt="{feature.title} background"
									loading="lazy"
									class="w-full h-full object-cover"
								/>
							{/if}
							<!-- Gradient overlay for better text readability -->
							<div class="absolute inset-0 bg-gradient-to-r from-background/60 via-background/30 to-transparent"></div>
						</div>

						<!-- Content overlay -->
						<div class="relative z-10 section-px max-w-2xl ml-auto mr-4 lg:mr-16 text-primary-foreground">
							<div class="text-right">
								<h3 class="text-title2 lg:text-title1 xl:text-display font-medium mb-4 lg:mb-6 text-balance leading-tight">
									{feature.title}
								</h3>
								<p class="text-body lg:text-callout text-primary-foreground/90 text-balance leading-relaxed">
									{feature.description}
								</p>
							</div>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</div>
</section>

<!--
@component
A full-screen feature section with a fixed navigation list on the left and scrollable content on the right.
As you scroll, the content slides horizontally and highlights the corresponding item in the left navigation.

Usage:
```html
<FullScreenScrollFeatures
  title="Section Title"
  subtitle="Section Subtitle"
  features={[
    {
      title: "Feature Title",
      description: "Feature description text",
      image: "https://images.unsplash.com/photo-example"
    }
    // more features...
  ]}
/>
```
-->

<style>
	/* Ensure smooth scrolling and proper layering */
	section {
		position: relative;
		z-index: 1;
	}
	
	/* Mobile responsiveness */
	@media (max-width: 1024px) {
		.w-1\/3 {
			width: 45%;
		}
		.w-2\/3 {
			width: 55%;
		}
	}
	
	@media (max-width: 768px) {
		.w-1\/3 {
			width: 50%;
		}
		.w-2\/3 {
			width: 50%;
		}
	}
	
	@media (max-width: 640px) {
		.sticky {
			flex-direction: column;
		}
		.w-1\/3 {
			width: 100%;
			height: auto;
			min-height: 40vh;
			position: relative;
			background: var(--color-background);
			border-r: none;
			border-b: 1px solid var(--color-border);
		}
		.w-2\/3 {
			width: 100%;
			height: 60vh;
		}
	}
</style>