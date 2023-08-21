<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import toast, { Toaster } from 'svelte-french-toast';
	import { goto } from '$app/navigation';

	export let data: PageData;
	let token = data.token;

	const { form, errors, enhance, constraints } = superForm(data.form, {
		resetForm: true,
		onUpdate: async ({ form }) => {
			// Form validation
			if (form.valid) {
				const response = await fetch(
					'https://ma-biblio-backend.vercel.app/api/auth/reset-password/confirm/',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							...form.data,
							token: token
						})
					}
				);
				const data = await response.json();
				if (response.ok) {
					toast.success('Votre mot de pass a été réinitialisé avec succès');
					setTimeout(() => {
						goto('/login');
					}, 2000);
				} else {
					toast.error(data.detail);
				}
			}
		}
	});
</script>

<svelte:head>
	<title>Nouveau Mot de pass | Ma Biblio</title>
</svelte:head>

<Toaster />

<div class="flex flex-col justify-center min-h-screen relative items-center mb-6">
	<a href="/" class="text-inherit w-1/2 md:w-1/3"
		><img src="/logo.svg" class="w-full object-contain" alt="LOGO" /></a
	>
	<h1 class="text-4xl font-bold mb-6 mt-8">Nouveau Mot de pass</h1>
	<form class="flex flex-col space-y-4" method="POST" use:enhance>
		<!-- password -->
		<div class="form-control">
			<label for="password" class="label">
				<span class="label-text">Mot de pass</span>
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
			<button type="submit" class="btn btn-primary"> Envoyer </button>
		</div>
		<!-- forgot password -->
		<div class="form-control">
			<a href="/login" class="link link-primary">Se Connecter?</a>
		</div>
	</form>
</div>
