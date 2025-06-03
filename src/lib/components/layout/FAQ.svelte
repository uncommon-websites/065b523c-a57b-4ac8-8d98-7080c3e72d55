<script lang="ts">
	import SectionHeader from "./SectionHeader.svelte";

	// Types
	type FAQItem = {
		question: string;
		answer: string;
	};

	// Props
	const {
		title,
		subtitle,
		faqs = [],
		...rest
	}: { title: string; subtitle?: string; faqs: FAQItem[] } = $props();

	// State for tracking which FAQ is open
	let openIndex = $state<number | null>(null);

	function toggleFAQ(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<section class="bg-muted/30" {...rest}>
	<div class="section-px section-py container mx-auto">
		<SectionHeader {title} {subtitle} />

		<div class="container-sm mx-auto space-y-4">
			{#each faqs as faq, index}
				<div class="group">
					<button
						class="flex w-full items-center justify-between rounded-lg bg-card p-6 text-left transition-all duration-200 hover:bg-card-hover focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
						onclick={() => toggleFAQ(index)}
						aria-expanded={openIndex === index}
					>
						<h3 class="text-headline font-medium text-card-foreground pr-4">
							{faq.question}
						</h3>
						<div
							class="flex-shrink-0 transition-transform duration-200 {openIndex === index
								? 'rotate-45'
								: 'rotate-0'}"
						>
							<svg
								class="h-5 w-5 text-muted-foreground"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 6v6m0 0v6m0-6h6m-6 0H6"
								/>
							</svg>
						</div>
					</button>

					{#if openIndex === index}
						<div
							class="overflow-hidden transition-all duration-200"
							style="animation: slideDown 0.2s ease-out"
						>
							<div class="px-6 pb-6 pt-2">
								<p class="text-body text-muted-foreground leading-relaxed">
									{faq.answer}
								</p>
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
A FAQ section that displays a list of frequently asked questions with expandable answers.
Uses clean accordion-style interaction with smooth animations.

Usage:
```html
<FAQ
  title="Frequently asked questions"
  subtitle="Everything you need to know about our platform"
  faqs={[
    {
      question: "How does the AI make decisions?",
      answer: "Our AI digital humans use real-time data fusion..."
    }
    // more FAQs...
  ]}
/>
```
-->

<style>
	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>