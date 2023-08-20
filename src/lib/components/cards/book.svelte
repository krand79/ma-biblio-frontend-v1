<script lang="ts">
	export let book: {
		titre: string;
		isbn: string;
		auteur: string;
		resume: string;
		image: string;
		date_de_publication: string;
		disponible: boolean;
	};
</script>

<div class="card card-side bg-base-100 shadow-xl">
	<figure class="w-1/2"><img src={book.image} alt={book.titre} /></figure>
	<div class="card-body">
		<h2 class="card-title">
			{book.titre}
		</h2>
		<p>
			{book.resume}
		</p>
		<div class="card-actions justify-end">
			<a href="/books?isbn={book.isbn}"><button class="btn btn-primary">Emprunter</button></a>
		</div>
	</div>
</div>
