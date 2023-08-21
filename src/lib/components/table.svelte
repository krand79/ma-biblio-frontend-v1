<script lang="ts">
	export let header: string[];
	export let data: {
		id: string;
		livre__titre: string;
		livre__auteur: string;
		livre__isbn: string;
		livre__la_date: number;
		date_d_emprunt: string;
		date_de_retour: string;
	}[];
</script>

<div class="overflow-x-auto w-full">
	<table class="table table-xs">
		<thead>
			<tr>
				<th />
				{#each header as item}
					<th>{item}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each data as item, index}
				<tr>
					<td> {index}</td>
					<td>{item.livre__titre}</td>
					<td>{item.livre__auteur}</td>
					<td>{item.livre__la_date}</td>
					<td>{item.livre__isbn}</td>
					<td>{item.date_d_emprunt}</td>
					<td>{item.date_de_retour}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
