<script lang="ts">
	// Types
	type Feature = {
		title: string;
		description: string;
		image?: string;
		link?: {
			href: string;
			label: string;
		};
	};

	// Components
	import SectionHeader from "./SectionHeader.svelte";
	import Button from "../ui/Button.svelte";

	// Props
	const {
		title,
		subtitle,
		features = [],
		...rest
	}: { title: string; subtitle: string; features: Feature[] } = $props();
</script>

<section class="section-py" {...rest}>
	<div class="section-px container mx-auto">
		<SectionHeader {title} {subtitle} />
		
		<div class="zig-zag-container">
			{#each features as feature, index}
				<div class="feature-row" class:reverse={index % 2 === 1}>
					<div class="feature-content">
						<div class="feature-text">
							<h3 class="h3">{feature.title}</h3>
							<p class="body-large text-secondary">{feature.description}</p>
							{#if feature.link}
								<Button href={feature.link.href} variant="secondary" size="small">
									{feature.link.label}
								</Button>
							{/if}
						</div>
					</div>
					
					{#if feature.image}
						<div class="feature-image">
							<img src={feature.image} alt={feature.title} loading="lazy" />
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!--
@component
A zig zag feature section that displays features in an alternating left-right layout.
Each feature can include a title, description, optional image, and optional link.

Usage:
```html
<ZigZagFeatures
  title="Section Title"
  subtitle="Section Subtitle"
  features={[
    {
      title: "Feature Title",
      description: "Feature description text",
      image: "/path/to/image.jpg", // optional
      link: { href: "/optional-link", label: "Learn more" } // optional
    }
    // more features...
  ]}
/>
```
-->

<style>
	.zig-zag-container {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-12);
	}

	.feature-row {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-8);
		align-items: center;
	}

	.feature-content {
		display: flex;
		flex-direction: column;
	}

	.feature-text {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-4);
	}

	.feature-image {
		border-radius: var(--radius-lg);
		overflow: hidden;
		background: var(--color-surface-secondary);
	}

	.feature-image img {
		width: 100%;
		height: auto;
		display: block;
		aspect-ratio: 16/9;
		object-fit: cover;
	}

	/* Desktop layout */
	@media (min-width: 768px) {
		.feature-row {
			grid-template-columns: 1fr 1fr;
			gap: var(--spacing-16);
		}

		.feature-row.reverse {
			direction: rtl;
		}

		.feature-row.reverse .feature-content,
		.feature-row.reverse .feature-image {
			direction: ltr;
		}

		.feature-content {
			justify-content: center;
		}

		.feature-text {
			max-width: 480px;
		}

		.feature-row.reverse .feature-text {
			margin-left: auto;
		}
	}

	@media (min-width: 1024px) {
		.zig-zag-container {
			gap: var(--spacing-20);
		}

		.feature-row {
			gap: var(--spacing-20);
		}
	}
</style>