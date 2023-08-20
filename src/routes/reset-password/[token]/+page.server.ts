/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	return {
		props: {
			token: params.token
		}
	};
}
