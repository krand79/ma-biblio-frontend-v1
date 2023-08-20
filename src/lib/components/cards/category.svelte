<script lang="ts">
	export let category: {
		id: number;
		name: string;
		image: string;
		description: string;
	};
</script>

<div class="card w-full bg-base-100 shadow-xl image-full">
	<figure><img src={category.image} alt={category.name} /></figure>
	<div class="card-body">
		<h2 class="text-xl font-semibold card-title">{category.name}</h2>
		<p>{category.description}</p>
		<div class="card-actions justify-end">
			<button class="btn btn-primary"> Voir Plus </button>
		</div>
	</div>
</div>
