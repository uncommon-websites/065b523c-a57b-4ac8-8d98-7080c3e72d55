<script lang="ts">
	import SectionHeader from "./SectionHeader.svelte";

	// Types
	type Feature = {
		title: string;
		description: string;
		icon?: string; // placeholder for icon
		size?: 'small' | 'medium' | 'large'; // for varying heights
	};

	// Props
	const {
		title,
		subtitle,
		features = [],
		...rest
	}: { title: string; subtitle: string; features: Feature[] } = $props();
</script>

<section class="section-px section-py" {...rest}>
	<div class="container mx-auto">
		<SectionHeader {title} {subtitle} />
		
		<div class="bento-grid">
			{#each features as feature, index}
				<div class="bento-card {feature.size || 'medium'} card-{index + 1}">
					<div class="icon-placeholder">
						{#if feature.icon}
							<img src={feature.icon} alt="" class="icon-image" />
						{:else}
							<div class="icon-default">
								<div class="icon-inner"></div>
							</div>
						{/if}
					</div>
					<h3 class="text-title3">{feature.title}</h3>
					<p class="text-body text-muted-foreground">{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.bento-grid {
		display: grid;
		gap: var(--spacing-6);
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		margin-top: var(--spacing-16);
	}

	.bento-card {
		background: var(--color-card);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		padding: var(--spacing-8);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-5);
		position: relative;
		overflow: hidden;
	}

	.bento-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(90deg, transparent, var(--color-primary-muted), transparent);
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.bento-card:hover {
		background: var(--color-card-hover);
		transform: translateY(-4px);
		box-shadow: 
			0 20px 25px -5px color-mix(in oklch, var(--color-foreground), transparent 85%),
			0 10px 10px -5px color-mix(in oklch, var(--color-foreground), transparent 90%);
		border-color: var(--color-border-hover);
	}

	.bento-card:hover::before {
		opacity: 1;
	}

	.icon-placeholder {
		margin-bottom: var(--spacing-3);
		flex-shrink: 0;
	}

	.icon-image {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: var(--radius);
	}

	.icon-default {
		width: 2.5rem;
		height: 2.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--radius-lg);
		background: linear-gradient(135deg, 
			color-mix(in oklch, var(--color-primary), transparent 85%) 0%,
			color-mix(in oklch, var(--color-primary), transparent 90%) 100%);
		border: 1px solid color-mix(in oklch, var(--color-primary), transparent 80%);
		position: relative;
		overflow: hidden;
	}

	.icon-default::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, 
			color-mix(in oklch, var(--color-primary), transparent 70%) 0%,
			transparent 50%);
		opacity: 0.3;
	}

	.icon-inner {
		width: 1rem;
		height: 1rem;
		border-radius: var(--radius);
		background: var(--color-primary);
		position: relative;
		z-index: 1;
	}

	.bento-card h3 {
		margin: 0;
		line-height: 1.3;
	}

	.bento-card p {
		margin: 0;
		line-height: 1.6;
		flex-grow: 1;
	}

	/* Size variations for different heights */
	.small {
		min-height: 200px;
	}

	.medium {
		min-height: 280px;
	}

	.large {
		min-height: 360px;
	}

	/* Mobile optimizations */
	@media (max-width: 767px) {
		.bento-grid {
			gap: var(--spacing-4);
			margin-top: var(--spacing-12);
		}

		.bento-card {
			padding: var(--spacing-6);
			gap: var(--spacing-4);
		}

		.icon-image,
		.icon-default {
			width: 2rem;
			height: 2rem;
		}

		.icon-inner {
			width: 0.75rem;
			height: 0.75rem;
		}
	}

	/* Responsive bento layout */
	@media (min-width: 768px) {
		.bento-grid {
			grid-template-columns: repeat(12, 1fr);
			grid-template-rows: repeat(8, minmax(60px, auto));
			gap: var(--spacing-6);
		}

		/* Card positioning for bento layout */
		.card-1 {
			grid-column: 1 / 7;
			grid-row: 1 / 5;
		}

		.card-2 {
			grid-column: 7 / 13;
			grid-row: 1 / 3;
		}

		.card-3 {
			grid-column: 7 / 13;
			grid-row: 3 / 5;
		}

		.card-4 {
			grid-column: 1 / 5;
			grid-row: 5 / 9;
		}

		.card-5 {
			grid-column: 5 / 9;
			grid-row: 5 / 7;
		}

		.card-6 {
			grid-column: 9 / 13;
			grid-row: 5 / 8;
		}
	}

	@media (min-width: 1024px) {
		.bento-grid {
			gap: var(--spacing-8);
			margin-top: var(--spacing-20);
		}
		
		.bento-card {
			padding: var(--spacing-10);
			gap: var(--spacing-6);
		}

		.icon-placeholder {
			margin-bottom: var(--spacing-4);
		}
	}

	@media (min-width: 1280px) {
		.bento-grid {
			grid-template-rows: repeat(8, minmax(70px, auto));
		}
		
		.bento-card {
			padding: var(--spacing-12);
		}
	}
</style>