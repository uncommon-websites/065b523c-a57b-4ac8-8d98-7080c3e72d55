<script lang="ts">
	import Button from "$lib/components/ui/Button.svelte";
	
	type Props = {
		title?: string;
		subtitle?: string;
	};
	
	let { 
		title = "Get in touch",
		subtitle = "Ready to transform your operations? Let's discuss how GeoSpatios can help your team make faster, safer decisions."
	}: Props = $props();
	
	// Form state
	let formData = $state({
		name: '',
		email: '',
		company: '',
		role: '',
		message: ''
	});
	
	let isSubmitting = $state(false);
	let isSubmitted = $state(false);
	
	async function handleSubmit(event: Event) {
		event.preventDefault();
		isSubmitting = true;
		
		// Simulate form submission
		await new Promise(resolve => setTimeout(resolve, 1000));
		
		isSubmitted = true;
		isSubmitting = false;
		
		// Reset form after 3 seconds
		setTimeout(() => {
			isSubmitted = false;
			formData = {
				name: '',
				email: '',
				company: '',
				role: '',
				message: ''
			};
		}, 3000);
	}
</script>

<section class="section-py bg-muted">
	<div class="container mx-auto section-px max-w-4xl">
		<div class="text-center section-mb-sm">
			<h2 class="text-title1 section-mb-sm">{title}</h2>
			<p class="text-callout text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
		</div>
		
		<div class="bg-card rounded-[var(--radius-2xl)] shadow-sm border border-border section-px section-py-sm">
			{#if isSubmitted}
				<div class="text-center section-py-sm">
					<div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto section-mb-sm">
						<svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
						</svg>
					</div>
					<h3 class="text-title3 section-mb-sm">Message sent successfully</h3>
					<p class="text-muted-foreground">Thank you for your interest. We'll get back to you within 24 hours.</p>
				</div>
			{:else}
				<form onsubmit={handleSubmit} class="space-y-6">
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label for="name" class="block text-caption font-medium text-foreground mb-2">
								Full name *
							</label>
							<input
								type="text"
								id="name"
								bind:value={formData.name}
								required
								class="w-full px-4 py-3 border border-border rounded-[var(--radius-md)] focus:ring-2 focus:ring-ring focus:border-transparent transition-colors bg-background text-foreground"
								placeholder="Enter your full name"
							/>
						</div>
						
						<div>
							<label for="email" class="block text-caption font-medium text-foreground mb-2">
								Email address *
							</label>
							<input
								type="email"
								id="email"
								bind:value={formData.email}
								required
								class="w-full px-4 py-3 border border-border rounded-[var(--radius-md)] focus:ring-2 focus:ring-ring focus:border-transparent transition-colors bg-background text-foreground"
								placeholder="Enter your email address"
							/>
						</div>
					</div>
					
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label for="company" class="block text-caption font-medium text-foreground mb-2">
								Company
							</label>
							<input
								type="text"
								id="company"
								bind:value={formData.company}
								class="w-full px-4 py-3 border border-border rounded-[var(--radius-md)] focus:ring-2 focus:ring-ring focus:border-transparent transition-colors bg-background text-foreground"
								placeholder="Enter your company name"
							/>
						</div>
						
						<div>
							<label for="role" class="block text-caption font-medium text-foreground mb-2">
								Role
							</label>
							<select
								id="role"
								bind:value={formData.role}
								class="w-full px-4 py-3 border border-border rounded-[var(--radius-md)] focus:ring-2 focus:ring-ring focus:border-transparent transition-colors bg-background text-foreground"
							>
								<option value="">Select your role</option>
								<option value="operations-manager">Operations Manager</option>
								<option value="air-traffic-controller">Air Traffic Controller</option>
								<option value="aviation-dispatcher">Aviation Dispatcher</option>
								<option value="maritime-executive">Maritime Executive</option>
								<option value="logistics-supervisor">Logistics Supervisor</option>
								<option value="energy-operator">Energy Grid Operator</option>
								<option value="it-director">IT Director</option>
								<option value="ceo-founder">CEO/Founder</option>
								<option value="other">Other</option>
							</select>
						</div>
					</div>
					
					<div>
						<label for="message" class="block text-caption font-medium text-foreground mb-2">
							Message *
						</label>
						<textarea
							id="message"
							bind:value={formData.message}
							required
							rows="5"
							class="w-full px-4 py-3 border border-border rounded-[var(--radius-md)] focus:ring-2 focus:ring-ring focus:border-transparent transition-colors resize-none bg-background text-foreground"
							placeholder="Tell us about your operational challenges and how we can help..."
						></textarea>
					</div>
					
					<div class="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4">
						<p class="text-caption text-muted-foreground">
							* Required fields
						</p>
						<Button
							type="submit"
							variant="primary"
							size="lg"
							disabled={isSubmitting}
						>
							{isSubmitting ? 'Sending...' : 'Send message'}
						</Button>
					</div>
				</form>
			{/if}
		</div>
		
		<div class="section-mt-sm text-center">
			<p class="text-muted-foreground mb-4">Prefer to reach out directly?</p>
			<div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
				<a href="mailto:hello@geospatios.com" class="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
					</svg>
					hello@geospatios.com
				</a>
				<a href="tel:+1-555-0123" class="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
					</svg>
					+1 (555) 012-3456
				</a>
			</div>
		</div>
	</div>
</section>