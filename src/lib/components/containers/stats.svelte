<script lang="ts">
	import Stat from '$lib/components/cards/stat.svelte';
	export let count_books: {
		count: number;
		count_copies: number;
	};
	export let count_emprunts: {
		count_emprunts: number;
		count_emprunters: number;
		avg: number;
	};
	export let count_users: { count: number };
</script>

<div class="stats stats-vertical md:stats-horizontal shadow">
	<Stat
		title="Utilisateurs"
		desc={`↗︎ ${count_emprunts.count_emprunters}/${count_users.count} ont emprunté`}
		value={`${count_users.count}`}
	>
		<svg
			class="inline-block w-8 h-8 stroke-current"
			xmlns="http://www.w3.org/2000/svg"
			data-name="Layer 1"
			viewBox="0 0 48 48"
			fill="none"
			><path
				stroke-width="4"
				d="M31.64,27.72a13.94,13.94,0,0,1-15.28,0A18,18,0,0,0,6.05,42.94a1,1,0,0,0,.27.75,1,1,0,0,0,.73.31H41a1,1,0,0,0,.73-.31,1,1,0,0,0,.27-.75A18,18,0,0,0,31.64,27.72Z"
			/><circle stroke-width="4" cx="24" cy="16" r="12" /></svg
		>
	</Stat>

	<Stat
		title="L'Ensemble des Livres"
		desc={`copies ↗︎ ${count_books.count_copies} (${
			Math.round((count_books.count_copies / count_books.count) * 100) || 0
		}%)`}
		value={`${count_books.count}`}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="inline-block w-8 h-8 stroke-current"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
			/></svg
		>
	</Stat>

	<Stat
		title="Emptunts"
		desc={`Avg ${count_emprunts.avg} par emprunteur`}
		value={`${count_emprunts.count_emprunts}`}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="inline-block w-8 h-8 stroke-current"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/></svg
		>
	</Stat>
</div>
