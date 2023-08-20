<script lang="ts">
	export let book: {
		id: number;
		titre: string;
		auteur: string;
		la_date: number;
		resume: string;
		image: string;
		categorie: number;
		isbn: string;
		copies: number;
	};
</script>

<div class="indicator w-full relative">
	<div class="card card-side bg-base-100 shadow-xl">
		<span class="indicator-item badge badge-secondary">
			{book.copies}
		</span>
		<figure class="!w-full object-cover">
			<img class="object-cover w-full h-full" src={book.image} alt={book.titre} />
		</figure>
		<div class="card-body !w-full">
			<h2 class="card-title font-semibold">
				{book.titre}
			</h2>
			<hr />
			<p>
				{book.resume}
			</p>
			<small class="card-subtitle text-right">
				{book.auteur}, {book.la_date}
			</small>
			<div class="card-actions justify-end">
				<a href="/books?isbn={book.isbn}"><button class="btn btn-primary">Emprunter</button></a>
			</div>
		</div>
	</div>
</div>
