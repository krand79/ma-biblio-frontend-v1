<script lang="ts">
	import BookHeader from '$lib/components/bookHeader.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { book, category_name, emprunts } = data;
</script>

<svelte:head>
	<title>{book.titre} | Ma Biblio</title>
</svelte:head>

<Navbar />

<main class="flex min-h-screen flex-col px-12">
	<BookHeader {book} {category_name} {emprunts} />
</main>
