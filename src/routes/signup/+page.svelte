<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import toast, { Toaster } from 'svelte-french-toast';
	// import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	export let data: PageData;

	const { form, errors, enhance, constraints } = superForm(data.form, {
		resetForm: true,
		onUpdate({ form }) {
			// Form validation
			if (form.valid) {
				toast.success("Email d'activation envoyé !");
				toast('Vous devez activer votre Email avant de se connecter!', {
					icon: '📧',
					style: 'border: 1px solid orange; padding: 16px; color: orange;'
				});
			}
		}
	});
</script>

<svelte:head>
	<title>Inscription | Ma Biblio</title>
</svelte:head>
<Toaster />

<!-- <SuperDebug data={$form} /> -->
<div class="flex flex-col justify-center h-screen items-center">
	<a href="/" class="text-inherit w-1/2 md:w-1/3"
		><img src="logo.svg" class="w-full object-contain" alt="LOGO" /></a
	>
	<h1 class="text-4xl font-bold my-8">Créer un Compte</h1>
	<form class="grid grid-cols-2 gap-6" method="POST" use:enhance>
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
		<div class="form-control col-span-2 w-full flex flex-col items-center">
			<button type="submit" class="btn w-1/2 btn-primary"> Créer un Compte </button>
			<!-- forgot password -->
			<div class="form-control mt-4">
				<a href="/login" class="link link-primary">Se Connecter?</a>
			</div>
		</div>
	</form>
</div>
