<script lang="ts">
	import SectionHeader from "./SectionHeader.svelte";

	// Types
	type Feature = {
		title: string;
		description: string;
		imageSrc: string;
		imageAlt?: string;
	};

	// Props
	const {
		title,
		subtitle,
		features = [],
		...rest
	}: { title: string; subtitle: string; features: Feature[] } = $props();
</script>

<section class="section-px section-py container mx-auto" {...rest}>
	<SectionHeader {title} {subtitle} />

	<div class="mt-16 space-y-24">
		{#each features as feature, index}
			<div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16" class:lg:flex-row-reverse={index % 2 !== 0}>
				<!-- Content -->
				<div class="flex-1 space-y-6">
					<h3 class="text-title2 text-foreground">{feature.title}</h3>
					<p class="text-body text-muted-foreground max-w-prose">{feature.description}</p>
				</div>

				<!-- Image -->
				<div class="flex-1">
					<div class="aspect-[4/3] rounded-(--radius) overflow-hidden bg-muted">
						<img
							src={feature.imageSrc}
							alt={feature.imageAlt || feature.title}
							class="w-full h-full object-cover"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<!--
@component
A zig-zag features section that alternates the layout of features with images.
Each feature includes a title, description, and image that alternate left/right positioning.

Usage:
```html
<ZigZagFeatures
  title="Section Title"
  subtitle="Section Subtitle"
  features={[
    {
      title: "Feature Title",
      description: "Feature description text",
      imageSrc: "/path/to/image.jpg",
      imageAlt: "Alt text for image" // optional
    }
    // more features...
  ]}
/>
```
-->