<script lang="ts">
	import { goto } from '$app/navigation';
	import Navbar from '$lib/components/navbar.svelte';
	import Table from '$lib/components/table.svelte';
	import user from '../../store/user';
	import { onMount } from 'svelte';

	let header = ['Titre', 'Auteur', 'Date de publication', 'ISBN', 'Emprunté le', 'Retourner le'];
	let data: {
		id: string;
		livre__titre: string;
		livre__auteur: string;
		livre__isbn: string;
		livre__la_date: number;
		date_d_emprunt: string;
		date_de_retour: string;
	}[] = [];

	// check if there's a user
	onMount(async () => {
		if (!$user.email) {
			goto('/');
		} else {
			const response = await fetch(
				`https://ma-biblio-backend.vercel.app/api/emprunt/get_user/${$user.id}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				}
			);
			data = await response.json();
			console.log(data);
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
