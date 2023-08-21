<script lang="ts">
	export let category: {
		id: number;
		name: string;
		image: string;
		description: string;
	};
</script>

<div class="hero min-h-[250px]" style="background-image: url({category.image});">
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">
				{category.name}
			</h1>
			<p class="mb-5">{category.description}</p>
		</div>
	</div>
</div>
