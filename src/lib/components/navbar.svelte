<script lang="ts">
	import user from '../../store/user';
	import tokens from '../../store/tokens';
	import { onMount } from 'svelte';
	import SearchMenu from './searchMenu.svelte';

	let search = '';
	let min_books = {};
	let inputRect = {};
	let inputRectMobile = {};

	onMount(async () => {
		const input = document.querySelector('.input');
		// @ts-ignore
		inputRect = input.getBoundingClientRect();
		// @ts-ignore
		inputRectMobile = input.getBoundingClientRect();

		const min_books_response = await fetch('https://ma-biblio-backend.vercel.app/api/livre/min', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		min_books = await min_books_response.json();
	});

	// @ts-ignore
	const onChange = (e) => {
		search = e.target.value;
	};
</script>

<div
	class="sticky z-50 top-0 flex bg-base-100
flex-col items-center !w-full h-fit shadow-lg md:pb-0 pb-2"
>
	<div class="navbar relative">
		<div class="navbar-start">
			<a href="/" class="text-inherit w-[150px]"
				><img src="/logo.svg" class="w-full object-contain" alt="LOGO" /></a
			>
		</div>
		<!-- middle search -->
		<div class="form-control relative hidden md:min-w-[50%] md:flex">
			<input
				type="text"
				placeholder="Chercher un livre"
				class="input invisible hidden md:flex md:visible w-full input-bordered"
				on:input={onChange}
			/>
			{#if search}
				<SearchMenu {search} {inputRect} {min_books} />
			{/if}
		</div>
		<!-- right side -->
		<div class="navbar-end">
			{#if $user.email}
				<!-- name -->
				<h2 class=" italic hidden md:flex font-semibold mr-3">
					{$user.name}
				</h2>
				<!-- avatar -->
				<div class="dropdown dropdown-end">
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<label for="avatar" tabindex="0" class="btn btn-ghost btn-circle avatar">
						<div id="avatar" class="w-10 rounded-full">
							<img alt="profile" src="/avatar.svg" />
						</div>
					</label>

					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<ul
						tabindex="0"
						class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
					>
						<li>
							<a href="/profile" class="justify-between">
								Profile
								<span class="badge">New</span>
							</a>
						</li>
						<li>
							<a
								on:click={() => {
									tokens.reset();
									user.reset();
								}}
								href="/">Logout</a
							>
						</li>
					</ul>
				</div>
			{:else}
				<a href="/login" class="btn">Se Connecter</a>
			{/if}
		</div>
	</div>
	<div class="form-control min-w-[90%] relative flex md:min-w-[50%] md:hidden">
		<input
			type="text"
			placeholder="Chercher un livre"
			class="input w-full input-bordered"
			on:input={onChange}
		/>
		{#if search}
			<SearchMenu {search} inputRect={inputRectMobile} {min_books} />
		{/if}
	</div>
</div>
