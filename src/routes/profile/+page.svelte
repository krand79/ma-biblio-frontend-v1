<script lang="ts">
	import { goto } from '$app/navigation';
	import Navbar from '$lib/components/navbar.svelte';
	import Table from '$lib/components/table.svelte';
	import user from '../../store/user';
	import { onMount } from 'svelte';

	let header = ['Titre', 'Auteur', 'Date de publication', 'ISBN', 'Emprunté le', 'Retourner le'];
	let apidata = [
		{
			title: 'The Lord of the Rings',
			auteur: 'J. R. R. Tolkien',
			date: '29 July 1954',
			isbn: '978-3-16-148410-0',
			emprunt: '12/16/2020',
			retour: '12/16/2020'
		},
		{
			title: ' of the Rings',
			auteur: 'J. R. R. Tolkien',
			date: '29 July 1954',
			isbn: '958-3-16-148410-0',
			emprunt: '12/16/2020',
			retour: '12/16/2020'
		}
	];

	let data: string[][] = apidata.map((item) => {
		return [item.title, item.auteur, item.date, item.isbn, item.emprunt, item.retour];
	});

	// check if there's a user
	onMount(() => {
		if (!$user.email) {
			goto('/');
		}
	});
</script>

<svelte:head>
	<title>Profile | Ma Biblio</title>
</svelte:head>

<Navbar />
{#if $user.email}
	<main class="flex flex-col justify-center items-center h-screen relative">
		<div class="grid grid-cols-12 h-full w-full gap-0">
			<!-- left -->
			<div class="col-span-4 flex flex-col items-center justify-start h-full pt-12">
				<img src="/avatar.svg" class="h-48 w-48 rounded-full object-cover" alt="Profile" />
				<h1 class="text-3xl font-semibold mb-6 mt-8">
					{$user.name}
				</h1>
				<p class="text-xl font-semibold">
					<span class="text-gray-500">Email:</span>
					{$user.email}
				</p>
			</div>
			<!-- right -->
			<div
				class="col-span-8 flex flex-col items-start border-l-[0.5px] border-opacity-70 px-4 justify-start h-full pt-12"
			>
				<h1 class="text-4xl font-semibold mb-6">Mes Empruntes:</h1>
				<Table {header} {data} />
			</div>
		</div>
	</main>
{/if}
