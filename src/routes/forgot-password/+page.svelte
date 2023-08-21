<script lang="ts">
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import toast, { Toaster } from 'svelte-french-toast';
	import { goto } from '$app/navigation';

	export let data: PageData;

	const { form, errors, enhance, constraints } = superForm(data.form, {
		resetForm: true,
		onUpdate: async ({ form }) => {
			// Form validation
			if (form.valid) {
				const response = await fetch(
					'https://ma-biblio-backend.vercel.app/api/auth/reset-password/',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(form.data)
					}
				);
				const data = await response.json();
				if (response.ok) {
					toast.success('Un email de réinitialisation a été envoyé à votre adresse email');
					setTimeout(() => {
						goto('/login');
					}, 2000);
				} else {
					toast.error(data.email);
				}
			}
		}
	});
</script>

<svelte:head>
	<title>Réinitialiser le Mot de pass | Ma Biblio</title>
</svelte:head>
<Toaster />

<div class="flex flex-col justify-center min-h-screen relative items-center">
	<a href="/" class="text-inherit w-1/2 md:w-1/3"
		><img src="logo.svg" class="w-full object-contain" alt="LOGO" /></a
	>
	<h1 class="text-4xl text-center font-bold mb-6 mt-8">Réinitialiser le Mot de pass</h1>
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
