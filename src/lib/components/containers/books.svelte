<script lang="ts">
	import BookCard from '$lib/components/cards/book.svelte';
	export let books: {
		id: number;
		titre: string;
		auteur: string;
		la_date: number;
		resume: string;
		image: string;
		categorie: number;
		isbn: string;
		copies: number;
	}[];
</script>

<section class="my-6 grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-24">
	{#each books as book}
		<BookCard {book} />
	{/each}
</section>
