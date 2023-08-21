<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import Books from '$lib/components/containers/books.svelte';
	import type { PageData } from './$types';
	import CategoryHeader from '$lib/components/categoryHeader.svelte';

	export let data: PageData;
	const { books, category_id, category } = data;
</script>

<svelte:head>
	<title>Livres | Ma Biblio</title>
</svelte:head>

<Navbar />

<main class="flex min-h-screen flex-col px-12">
	{#if category_id}
		<CategoryHeader {category} />
	{/if}
	<Books {books} />
</main>
