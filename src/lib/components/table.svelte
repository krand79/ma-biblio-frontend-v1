<script lang="ts">
	export let header: string[];
	export let data: string[][];
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
					{#each item as i}
						<td>{i}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
