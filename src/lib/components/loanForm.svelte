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
	export let emprunts: number;
	import { DateInput, localeFromDateFnsLocale } from 'date-picker-svelte';
	import { fr } from 'date-fns/locale';
	import { format } from 'date-fns';
	import toast from 'svelte-french-toast';
	import { goto } from '$app/navigation';
	import user from '../../store/user';

	let date_d_emprunt = new Date();
	let date_de_retour = new Date();
	let date_de_passe = new Date();

	const formatDate = (date: any) => {
		return format(date, 'yyyy-MM-dd');
	};

	const validate = () => {
		if ($user.email === '') {
			toast.error('Vous devez être connecté pour emprunter un livre');
			return false;
		}
		if (date_d_emprunt < date_de_passe) {
			toast.error("Date d'emprunt invalide");
			return false;
		} else if (date_de_retour < date_d_emprunt) {
			toast.error('Date de retour invalide');
			return false;
		} else if (date_de_retour.getDate() - date_d_emprunt.getDate() < 1) {
			toast.error('Emprunt de moins de 24h non autorisé');
			return false;
		}
		return true;
	};

	const submit = async () => {
		if (validate()) {
			console.log('submit');
			const emprunt = {
				livre: book.id,
				user: $user.id,
				date_d_emprunt: formatDate(date_d_emprunt),
				date_de_retour: formatDate(date_de_retour)
			};
			const response = await fetch('https://ma-biblio-backend.vercel.app/api/emprunt/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(emprunt)
			});

			if (!response.ok) {
				toast.error('Une erreur est survenue');
				return;
			}

			toast.success('Emprunt effectué avec succès');
			setTimeout(() => {
				goto('/profile');
			}, 2000);
		}
	};

	let locale = localeFromDateFnsLocale(fr);
</script>

<div class="indicator w-full">
	<div class="indicator-item indicator-bottom">
		<button on:click={submit} class="btn flex !flex-row btn-neutral">
			<p>Emprunter</p>
			<div class="badge badge-secondary">
				{book.copies - emprunts}/{book.copies}
			</div>
		</button>
	</div>
	<div class="card border w-full">
		<div class="p-6 flex flex-row !items-center !justify-center w-full space-x-5">
			<div class="form-control w-fit">
				<label for="data_d_emprunt" class="label">
					<span class="label-text"> Date d&apos;emprunt </span>
				</label>
				<DateInput
					format="yyyy-MM-dd"
					closeOnSelection={true}
					bind:value={date_d_emprunt}
					{locale}
				/>
			</div>
			<div class="form-control flex flex-col items-center justify-center w-fit">
				<label for="data_d_emprunt" class="label">
					<span class="label-text" />
				</label>
				<p class="w-fit m-0">➡</p>
			</div>
			<div class="form-control w-fit">
				<label for="data_de_retour" class="label">
					<span class="label-text"> Date de retour </span>
				</label>
				<DateInput
					format="yyyy-MM-dd"
					closeOnSelection={true}
					bind:value={date_de_retour}
					{locale}
				/>
			</div>
		</div>
	</div>
</div>

<style>
	:root {
		--date-picker-background: #1b1e27;
		--date-picker-foreground: #f7f7f7;
		--date-picker-highlight-border: green;
		--date-picker-selected-color: lightgreen;
	}
</style>
