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
				toast.success('Successfully logged in!');
			}
		}
	});
</script>

<svelte:head>
	<title>Login | Ma Biblio</title>
</svelte:head>
<Toaster />

<!-- <SuperDebug data={$form} /> -->
<div class="flex flex-col justify-center items-center">
	<h1 class="text-4xl font-bold my-8">Login</h1>
	<form class="flex flex-col space-y-4" method="POST" use:enhance>
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
		<!-- submit -->
		<div class="form-control">
			<button type="submit" class="btn btn-primary">Login</button>
		</div>
		<!-- forgot password -->
		<div class="form-control">
			<a href="/forgot-password" class="link link-primary">Forgot Password?</a>
		</div>
	</form>
</div>
