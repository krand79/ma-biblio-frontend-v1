<script lang="ts">
	import CategoryCard from '$lib/components/cards/category.svelte';
	export let categories: {
		id: number;
		name: string;
		image: string;
		description: string;
	}[];
</script>

<section class="my-6 grid grid-cols-3 gap-6 px-6">
	{#each categories as category}
		<CategoryCard {category} />
	{/each}
</section>
