<script lang="ts">
	import type { PageData } from './$types';
	import Navbar from '$lib/components/navbar.svelte';
	import Carousel from '$lib/components/carousel.svelte';
	import Categories from '$lib/components/containers/categories.svelte';
	import Books from '$lib/components/containers/books.svelte';
	import Stats from '$lib/components/containers/stats.svelte';

	export let data: PageData;

	const { categories, books, count_books, count_emprunts, count_users } = data;
</script>

<svelte:head>
	<title>Welcome | Ma Biblio</title>
</svelte:head>

<Navbar />
<Carousel />

<main class="flex flex-col mb-12 px-12">
	<div class="divider text-3xl mt-10 font-semibold">Nos Catégories</div>
	<Categories {categories} />
	<div class="divider text-3xl mt-10 font-semibold">Recommandés</div>
	<Books books={books.slice(0, 4)} />
	<div class="divider text-3xl mt-10 font-semibold">Populaires</div>
	<Books books={books.slice(4)} />
	<div class="flex flex-col items-center justify-center m-3">
		<a href="/books"><button class="btn btn-outline btn-primary">Tous les livres</button></a>
	</div>
	<div class="divider text-3xl mt-10 font-semibold">Des Chiffres</div>
	<Stats {count_books} {count_emprunts} {count_users} />
</main>
