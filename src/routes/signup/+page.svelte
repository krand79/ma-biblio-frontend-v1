<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import toast, { Toaster } from 'svelte-french-toast';
	import { goto } from '$app/navigation';
	// import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	export let data: PageData;

	const { form, errors, enhance, constraints } = superForm(data.form, {
		resetForm: true,
		onUpdate: async ({ form }) => {
			if (form.valid) {
				const user = {
					...form.data
				};
				const response = await fetch('https://ma-biblio-backend.vercel.app/api/auth/register', {
					method: 'POST',
					body: JSON.stringify(user),
					headers: {
						'Content-Type': 'application/json'
					}
				});
				const data = await response.json();
				if (response.ok) {
					toast.success('Votre Compte a été Créer avec Succès');
					setTimeout(() => {
						goto('/login');
					}, 2000);
				} else {
					toast.error(
						data?.email[0]
							? 'Un compte avec cette adresse email existe déjà'
							: 'Une erreur est survenue'
					);
				}
			}
		}
	});
</script>

<svelte:head>
	<title>Inscription | Ma Biblio</title>
</svelte:head>
<Toaster />

<!-- <SuperDebug data={$form} /> -->
<div class="flex flex-col justify-center min-h-screen items-center">
	<a href="/" class="text-inherit w-1/2 md:w-1/3"
		><img src="logo.svg" class="w-full object-contain" alt="LOGO" /></a
	>
	<h1 class="text-4xl font-bold my-8">Créer un Compte</h1>
	<form class="grid grid-cols-1 md:grid-cols-2 gap-6" method="POST" use:enhance>
		<!-- email -->
		<div class="form-control">
			<label for="email" class="label">
				<span class="label-text">Your Email</span>
			</label>
			<label class="input-group">
				<span>Email</span>
				<input
					bind:value={$form.email}
					name="email"
					type="email"
					placeholder="me@info.com"
					class="input input-bordered"
					{...$constraints.email}
				/>
			</label>
			{#if $errors.email}
				<small class="text-error">{$errors.email}</small>
			{/if}
		</div>
		<!-- name -->
		<div class="form-control">
			<label for="name" class="label">
				<span class="label-text">Votre Nom</span>
			</label>
			<input
				bind:value={$form.name}
				name="name"
				type="text"
				placeholder="John Doe"
				class="input input-bordered"
				{...$constraints.name}
			/>
			{#if $errors.name}
				<small class="text-error">{$errors.name}</small>
			{/if}
		</div>
		<!-- password -->
		<div class="form-control">
			<label for="password" class="label">
				<span class="label-text">Your Password</span>
			</label>
			<input
				bind:value={$form.password}
				name="password"
				type="password"
				placeholder="********"
				class="input input-bordered"
				{...$constraints.password}
			/>
			{#if $errors.password}
				<small class="text-error">{$errors.password}</small>
			{/if}
		</div>
		<!-- passwordConfirm -->
		<div class="form-control">
			<label for="passwordConfirm" class="label">
				<span class="label-text">Confirmer Votre Mot de Pass</span>
			</label>
			<input
				bind:value={$form.passwordConfirm}
				name="passwordConfirm"
				type="password"
				placeholder="********"
				class="input input-bordered"
				{...$constraints.passwordConfirm}
			/>
			{#if $errors.passwordConfirm}
				<small class="text-error">{$errors.passwordConfirm}</small>
			{/if}
		</div>
		<!-- submit -->
		<div class="form-control md:col-span-2 w-full flex flex-col items-center">
			<button type="submit" class="btn w-full md:w-1/2 btn-primary"> Créer un Compte </button>
			<!-- forgot password -->
			<div class="form-control mt-4">
				<a href="/login" class="link link-primary">Se Connecter?</a>
			</div>
		</div>
	</form>
</div>
