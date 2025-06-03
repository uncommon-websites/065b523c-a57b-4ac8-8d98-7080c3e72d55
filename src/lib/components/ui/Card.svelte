<script>
	let { title = "", description = "", icon = "", class: customClass = "" } = $props();
</script>

<article
	class="bg-card hover:bg-sidebar-primary-foreground hover:text-primary-900 border-border grid content-between gap-16 rounded-(--radius) border p-4 px-5 text-pretty transition duration-300 ease-out lg:p-5 lg:px-6 {customClass}"
>
	<div class="flex flex-col gap-4">
		<div class="icon-placeholder">
			{#if icon}
				<span class="icon">{icon}</span>
			{:else}
				<div class="icon-placeholder-box"></div>
			{/if}
		</div>
		<div>
			<h3 class="text-title3 mb-2">
				{title}
			</h3>
			<p class="text-body max-w-prose opacity-60">{description}</p>
		</div>
	</div>
</article>

<style>
	.icon-placeholder {
		display: flex;
		align-items: center;
		justify-content: flex-start;
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
</style>
