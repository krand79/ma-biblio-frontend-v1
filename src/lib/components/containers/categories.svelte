<script lang="ts">
	import CategoryCard from '$lib/components/cards/category.svelte';

	let categories = [1, 2, 3, 4, 5];
</script>

<section class="my-6 grid grid-cols-3 gap-6 px-6">
	{#each categories as category}
		<CategoryCard />
	{/each}
</section>
