/** @type {import('./$types').PageServerLoad} */
export const load = async (event: any) => {
	const response = await fetch('https://ma-biblio-backend.vercel.app/api/categorie/all', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	const categories = await response.json();

	return {
		categories
	};
};
