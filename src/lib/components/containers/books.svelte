<script lang="ts">
	import BookCard from '$lib/components/cards/book.svelte';

	let books = [1, 2, 3, 4, 5];
</script>

<section class="my-6 grid grid-cols-2 gap-10 px-24">
	{#each books as book}
		<BookCard />
	{/each}
</section>
