<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import Books from '$lib/components/containers/books.svelte';
</script>

<svelte:head>
	<title>Livres | Ma Biblio</title>
</svelte:head>

<Navbar />

<main class="flex min-h-screen flex-col px-12">
	<Books />
</main>
