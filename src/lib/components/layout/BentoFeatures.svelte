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
							<img src={feature.icon} alt="" class="w-8 h-8" />
						{:else}
							<div class="w-8 h-8 flex items-center justify-center rounded-lg" style="background-color: color-mix(in oklch, var(--color-primary), transparent 80%);">
								<div class="w-4 h-4 rounded" style="background-color: color-mix(in oklch, var(--color-primary), transparent 60%);"></div>
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
		gap: var(--spacing-4);
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		margin-top: var(--spacing-12);
	}

	.bento-card {
		background: var(--color-card);
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		padding: var(--spacing-6);
		transition: all 0.3s ease;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-4);
	}

	.bento-card:hover {
		background: var(--color-card-hover);
		transform: translateY(-2px);
		box-shadow: 0 8px 25px color-mix(in oklch, var(--color-foreground), transparent 90%);
	}

	.icon-placeholder {
		margin-bottom: var(--spacing-2);
	}

	/* Size variations for different heights */
	.small {
		min-height: 180px;
	}

	.medium {
		min-height: 240px;
	}

	.large {
		min-height: 320px;
	}

	/* Responsive bento layout */
	@media (min-width: 768px) {
		.bento-grid {
			grid-template-columns: repeat(12, 1fr);
			grid-template-rows: repeat(6, 80px);
		}

		/* Card positioning for bento layout */
		.card-1 {
			grid-column: 1 / 7;
			grid-row: 1 / 4;
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
			grid-row: 4 / 7;
		}

		.card-5 {
			grid-column: 5 / 9;
			grid-row: 4 / 6;
		}

		.card-6 {
			grid-column: 9 / 13;
			grid-row: 5 / 7;
		}
	}

	@media (min-width: 1024px) {
		.bento-grid {
			gap: var(--spacing-6);
		}
		
		.bento-card {
			padding: var(--spacing-8);
		}
	}
</style>