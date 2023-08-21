<script lang="ts">
	import { Toaster } from 'svelte-french-toast';
	import LoanForm from './loanForm.svelte';

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
	export let category_name: string;
	export let emprunts: number;
</script>

<Toaster />

<div class="hero min-h-[300px] bg-base-200">
	<div class="hero-content flex-col min-w-[90%] space-x-4 lg:flex-row">
		<img alt={book.titre} src={book.image} />
		<div class="flex flex-col items-start relative !w-full justify-start">
			<h1 class="text-5xl !w-10/12 font-bold">
				{book.titre}
				<sub class="text-xs">
					{category_name}
				</sub>
			</h1>
			<small class="text-right !w-10/12">
				{book.auteur}, {book.la_date}
			</small>
			<p class="py-6">{book.resume}</p>
			<div class="flex flex-row items-center !w-10/12 space-x-4 mt-4 justify-end">
				<LoanForm {emprunts} {book} />
			</div>
		</div>
	</div>
</div>
