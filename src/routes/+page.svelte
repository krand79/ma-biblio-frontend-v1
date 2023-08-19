<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import Carousel from '$lib/components/carousel.svelte';
	import Categories from '$lib/components/containers/categories.svelte';
	import Books from '$lib/components/containers/books.svelte';
	import Stats from '$lib/components/containers/stats.svelte';
</script>

<svelte:head>
	<title>Welcome | Ma Biblio</title>
</svelte:head>

<Navbar />
<Carousel />

<main class="flex flex-col mb-12 px-12">
	<div class="divider text-3xl mt-10 font-semibold">Nos Catégories</div>
	<Categories />
	<div class="divider text-3xl mt-10 font-semibold">Nos Livres Recommandés</div>
	<Books />
	<div class="divider text-3xl mt-10 font-semibold">Nos Livres Populaires</div>
	<Books />
	<div class="divider text-3xl mt-10 font-semibold">Des Chiffres</div>
	<Stats />
</main>
