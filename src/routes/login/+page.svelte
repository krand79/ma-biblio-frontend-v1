<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import toast, { Toaster } from 'svelte-french-toast';
	import { goto } from '$app/navigation';
	import storeuser from '../../store/user';
	import storetokens from '../../store/tokens';
	// import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	export let data: PageData;

	const { form, errors, enhance, constraints } = superForm(data.form, {
		resetForm: true,
		onUpdate: async ({ form }) => {
			// Form validation
			if (form.valid) {
				const user = {
					...form.data
				};
				const response = await fetch('https://ma-biblio-backend.vercel.app/api/auth/login', {
					method: 'POST',
					body: JSON.stringify(user),
					headers: {
						'Content-Type': 'application/json'
					}
				});
				const data = await response.json();
				if (response.ok) {
					const tokens_response = await fetch(
						'https://ma-biblio-backend.vercel.app/api/auth/tokens/',
						{
							method: 'POST',
							body: JSON.stringify(user),
							headers: {
								'Content-Type': 'application/json'
							}
						}
					);
					const tokens = await tokens_response.json();
					if (tokens_response.ok) {
						storetokens.set({
							...tokens
						});
						storeuser.set({
							...data
						});
						toast.success('Bienvenue');
						setTimeout(() => {
							goto('/');
						}, 1000);
					} else {
						toast.error(tokens?.detail || 'Une erreur est survenue');
					}
				} else {
					toast.error(data?.detail || 'Une erreur est survenue');
				}
			}
		}
	});
</script>

<svelte:head>
	<title>Se Connecter | Ma Biblio</title>
</svelte:head>
<Toaster />

<!-- <SuperDebug data={$form} /> -->
<div class="flex flex-col justify-center items-center min-h-screen relative">
	<a href="/" class="text-inherit w-1/2 md:w-1/3"
		><img src="logo.svg" class="w-full object-contain" alt="LOGO" /></a
	>

	<h1 class="text-4xl font-bold mb-6 mt-8">Se Connecter</h1>
	<form class="flex flex-col space-y-4" method="POST" use:enhance>
		<!-- email -->
		<div class="form-control">
			<label for="email" class="label">
				<span class="label-text">Votre Email</span>
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
		<!-- password -->
		<div class="form-control">
			<label for="password" class="label">
				<span class="label-text">Votre Mot de pass</span>
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
		<!-- submit -->
		<div class="form-control">
			<button type="submit" class="btn btn-primary">Se Connecter</button>
		</div>
		<!-- forgot password -->
		<div class="form-control">
			<a href="/forgot-password" class="link link-primary"> Oublié votre mot de pass ? </a>
		</div>
		<!-- signup -->
		<div class="form-control">
			<a href="/signup" class="link link-primary text-right"> Créer un compte </a>
		</div>
	</form>
</div>
