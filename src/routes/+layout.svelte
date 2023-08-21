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
		return response;
	};

	if ($tokens.access && !$user.id) {
		getUserCredentials($tokens.access).then((response) => {
			if (response.status === 200) {
				response.json().then((data) => {
					user.set(data);
				});
			}
			// else {
			// 	getUserCredentials($tokens.refresh).then((response) => {
			// 		if (response.status === 200) {
			// 			response.json().then((data) => {
			// 				user.set(data);
			// 			});
			// 		} else {
			// 			tokens.set({ access: '', refresh: '' });
			// 		}
			// 	});
			// }
		});
	}
</script>

<slot />
<Footer />
