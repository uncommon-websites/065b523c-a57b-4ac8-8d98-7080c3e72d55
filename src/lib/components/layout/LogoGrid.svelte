<!--
    @component
    Logo grid component that displays company logos in a 3x3 grid layout with boxes.

    Usage:
    ```html
    <LogoGrid
      title="Trusted by industry leaders"
      logoUrls={[
        'https://logo.clearbit.com/delta.com',
        'https://logo.clearbit.com/maersk.com',
        // ... up to 9 logos
      ]}
    />
    ```

    Props:
    - `title`: Optional title for the logo grid section (string)
    - `logoUrls`: Array of logo image URLs (string[])
-->

<script lang="ts">
	type Props = {
		title?: string;
		logoUrls: string[];
	};

	let { title, logoUrls }: Props = $props();

	function handleImageError(e: Event) {
		const target = e.currentTarget as HTMLImageElement;
		target.src = "https://placehold.co/120x60/f8fafc/64748b?text=Logo";
	}
</script>

<section class="bg-background section-py">
	<div class="section-px container mx-auto">
		{#if title}
			<div class="mb-12 text-center">
				<h2 class="text-headline text-muted-foreground">{title}</h2>
			</div>
		{/if}
		
		<div class="grid grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-4xl mx-auto">
			{#each logoUrls.slice(0, 9) as logoUrl, index}
				<div 
					class="bg-card border border-border rounded-lg p-6 md:p-8 flex items-center justify-center aspect-square hover:bg-card-hover transition-colors duration-200"
					data-enter
				>
					<img
						src={logoUrl}
						alt="Company logo"
						class="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
						onerror={handleImageError}
					/>
				</div>
			{/each}
		</div>
	</div>
</section>