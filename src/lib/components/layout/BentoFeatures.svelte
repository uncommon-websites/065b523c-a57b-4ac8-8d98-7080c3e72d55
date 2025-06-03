<script lang="ts">
	import SectionHeader from "./SectionHeader.svelte";

	// Types
	type Feature = {
		title: string;
		description: string;
		icon?: string; // placeholder for icon
		size?: 'small' | 'medium' | 'large';
	};

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
		
		<div class="bento-grid">
			{#each features as feature, index}
				<div class="bento-card {feature.size || 'medium'}" class:large={feature.size === 'large'} class:small={feature.size === 'small'}>
					<div class="icon-placeholder">
						{#if feature.icon}
							<span class="icon">{feature.icon}</span>
						{:else}
							<div class="icon-placeholder-box"></div>
						{/if}
					</div>
					<div class="content">
						<h3 class="text-title3 mb-2">{feature.title}</h3>
						<p class="text-body opacity-60">{feature.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!--
@component
A bento box features section with varying heights and icon placeholders.

Usage:
```html
<BentoFeatures
  title="Our features"
  subtitle="Everything you need to succeed"
  features={[
    {
      title: "Feature title",
      description: "Feature description",
      icon: "🚀", // optional
      size: "large" // optional: 'small', 'medium', 'large'
    }
  ]}
/>
```
-->

<style>
	.bento-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1rem;
		margin-top: 2rem;
	}

	@media (min-width: 768px) {
		.bento-grid {
			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: repeat(3, minmax(200px, auto));
			gap: 1.5rem;
		}
	}

	.bento-card {
		background: var(--color-card);
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
	}

	.bento-card:hover {
		background: var(--color-card-hover);
		transform: translateY(-2px);
		box-shadow: 0 8px 25px -8px rgba(0, 0, 0, 0.1);
	}

	/* Default medium size */
	.bento-card.medium {
		grid-column: span 1;
		grid-row: span 1;
	}

	/* Large cards span more space */
	.bento-card.large {
		grid-column: span 2;
		grid-row: span 2;
	}

	/* Small cards are more compact */
	.bento-card.small {
		grid-column: span 1;
		grid-row: span 1;
		padding: 1rem;
	}

	@media (max-width: 767px) {
		.bento-card.large,
		.bento-card.medium,
		.bento-card.small {
			grid-column: span 1;
			grid-row: span 1;
		}
	}

	.icon-placeholder {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 48px;
		height: 48px;
		flex-shrink: 0;
	}

	.icon-placeholder-box {
		width: 100%;
		height: 100%;
		background: var(--color-muted);
		border-radius: var(--radius-sm);
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.icon-placeholder-box::before {
		content: '';
		width: 24px;
		height: 24px;
		background: var(--color-muted-foreground);
		opacity: 0.3;
		border-radius: var(--radius-xs);
	}

	.icon {
		font-size: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.content {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.large .icon-placeholder {
		width: 64px;
		height: 64px;
	}

	.large .icon {
		font-size: 32px;
	}

	.large .content {
		gap: 1rem;
	}

	.small .icon-placeholder {
		width: 40px;
		height: 40px;
	}

	.small .icon {
		font-size: 20px;
	}
</style>