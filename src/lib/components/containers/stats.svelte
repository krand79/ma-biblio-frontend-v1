<script lang="ts">
	import Stat from '$lib/components/cards/stat.svelte';
	export let count_books: {
		count: number;
		count_copies: number;
	};
</script>

<div class="stats shadow">
	<Stat title="Emptuntes" desc="Jan 1st - Feb 1st" value="1,200">
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

	<Stat title="Nouveaux Utilisateurs" desc="↗︎ 400 (22%)" value="4,200">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="inline-block w-8 h-8 stroke-current"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
			/></svg
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
</div>
