<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import '../app.css';
	import user from '../store/user';
	import tokens from '../store/tokens';

	const getUserCredentials = async (access: string) => {
		const response = await fetch('https://ma-biblio-backend.vercel.app/api/auth/login/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${access}`
			}
		});
		const data = await response.json();
		return data;
	};

	if ($tokens.access && !$user.id) {
		getUserCredentials($tokens.access).then((data) => {
			user.set({
				...data
			});
		});
	}
</script>

<slot />
<Footer />
