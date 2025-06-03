<script lang="ts">
	// Types
	type Testimonial = {
		name: string;
		position: string;
		company: string;
		quote: string;
		image: string;
	};

	// Props
	let { testimonials, ...rest }: { testimonials: Testimonial[] } = $props();

	// State
	let current = $state(0);
	let scrollProgress = $state(0);
	let wrapperRef: HTMLElement;
	let carouselRef: HTMLElement;
	let maxScrollDistance = $state(0);

	import { onMount } from "svelte";

	onMount(() => {
		// Preload images
		testimonials.forEach((testimonial) => {
			if (testimonial.image) {
				const img = new Image();
				img.loading = "lazy";
				img.src = testimonial.image;
			}
		});

		// Calculate the max scroll distance for translation
		const updateDimensions = () => {
			if (!carouselRef) return;

			// Get all cards and container measurements
			const cards = Array.from(carouselRef.querySelectorAll("article"));
			if (!cards.length) return;

			// Get the total width of all content including gaps
			const carouselWidth = carouselRef.scrollWidth;
			// Get the viewport width
			const viewportWidth = window.innerWidth;

			// To ensure the last card is fully visible at the end of the scroll,
			// we need to make sure the last card's right edge aligns with the viewport's right edge
			maxScrollDistance = Math.max(0, carouselWidth - viewportWidth);

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
				current = Math.min(Math.floor(progress * testimonials.length), testimonials.length - 1);
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
	style="height: calc(100vh * {testimonials.length});"
	{...rest}
>
	<div
		class="sticky top-0 flex min-h-screen w-full items-center overflow-hidden"
	>
		<div
			bind:this={carouselRef}
			class="flex w-full gap-0"
		>
			{#each testimonials as testimonial, index}
				<article
					class="relative min-w-full h-screen flex items-center justify-center transform-gpu transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
					style:transform="translateX(calc(-{scrollProgress} * {maxScrollDistance}px))"
				>
					<!-- Full screen background image -->
					<div class="absolute inset-0 z-0">
						{#if testimonial.image}
							<img
								src={testimonial.image}
								alt="{testimonial.name} testimonial background"
								loading="lazy"
								class="w-full h-full object-cover"
							/>
						{/if}
						<!-- Black gradient overlay -->
						<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
					</div>

					<!-- Content overlay -->
					<div class="relative z-10 section-px max-w-4xl mx-auto text-center text-white">
						<blockquote class="mb-12">
							<q class="text-title1 lg:text-display max-w-prose block text-balance leading-tight">
								{testimonial.quote}
							</q>
						</blockquote>
						
						<cite class="not-italic">
							<div class="flex flex-col items-center gap-4">
								<div class="text-center">
									<p class="text-headline font-medium text-primary-foreground">
										{testimonial.name}
									</p>
									<p class="text-callout text-white/80">
										{testimonial.position}
									</p>
									<p class="text-callout text-white/60">
										{testimonial.company}
									</p>
								</div>
							</div>
						</cite>
					</div>
				</article>
			{/each}
		</div>

		<!-- Pagination Indicators -->
		<div class="absolute bottom-8 left-1/2 flex -translate-x-1/2 justify-center gap-3 z-20">
			{#each testimonials as _, index}
				<div
					class="h-1 rounded-full transition-all duration-300 ease-in-out bg-white/40"
					class:w-8={current === index}
					class:w-3={current !== index}
					class:bg-primary={current === index}
					aria-hidden="true"
				></div>
			{/each}
		</div>
	</div>
</section>