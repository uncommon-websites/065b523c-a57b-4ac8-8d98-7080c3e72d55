<script lang="ts">
	import Button from "$lib/components/ui/Button.svelte";

	const {
		name = "",
		position = "",
		imageSrc = "",
		type = "team",
		stakeholderType = "team",
		index = 0,
		cards = $bindable([])
	}: {
		name?: string;
		position?: string;
		imageSrc?: string;
		type?: "team" | "join";
		stakeholderType?: "team" | "investor";
		index?: number;
		cards?: HTMLElement[];
	} = $props();
</script>

<div
	bind:this={cards[index]}
	class={[
		"card bg-gray-50 dark:bg-gray-900",
		"h-full group",
		"relative isolate grid aspect-[4/5] content-end items-end gap-10 overflow-hidden rounded-2xl p-6 shadow-sm ring-1 ring-black/5 dark:ring-white/10",
		type === "join" ? "bg-primary" : ""
	]}
>
	{#if type !== "join" && imageSrc}
		<img
			src={imageSrc}
			alt={name}
			loading="lazy"
			class="absolute inset-0 z-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
		/>
	{/if}

	{#if type === "team" && stakeholderType === "team"}
		<div
			class="absolute top-0 right-0 bottom-0 left-0 z-1 bg-gradient-to-b from-transparent via-transparent to-black/60"
		>
			<div class="absolute right-0 bottom-0 left-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>
		</div>
	{/if}

	<div
		class={[
			"text-sm font-medium z-10 transition-all duration-300",
			stakeholderType !== "team" ? "text-gray-700 dark:text-gray-50" : "text-white"
		]}
	>
		<div class={type === "join" ? "grid grid-cols-2 items-center" : ""}>
			<div class="space-y-1">
				<div class="font-semibold leading-tight">{name}</div>
				<div class="text-xs opacity-80 font-normal leading-tight">{position}</div>
			</div>
			{#if type === "join"}
				<div class="justify-self-end">
					<Button href="/careers" variant="secondary" size="sm">Join us</Button>
				</div>
			{/if}
		</div>
	</div>
</div>
