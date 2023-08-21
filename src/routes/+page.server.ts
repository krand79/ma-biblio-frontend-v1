/** @type {import('./$types').PageServerLoad} */
export const load = async (event: any) => {
	const category_response = await fetch('https://ma-biblio-backend.vercel.app/api/categorie/all', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	const categories = await category_response.json();

	const books_response = await fetch(
		'https://ma-biblio-backend.vercel.app/api/livre/get_specific_count?count=6',
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);
	const books = await books_response.json();

	const count_response = await fetch('https://ma-biblio-backend.vercel.app/api/livre/get_count', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	const count_books: { count: number; count_copies: number } = await count_response.json();

	const count_emprunts_response = await fetch(
		'https://ma-biblio-backend.vercel.app/api/emprunt/avg',
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);
	const count_emprunts: {
		count_emprunts: number;
		count_emprunters: number;
		avg: number;
	} = await count_emprunts_response.json();

	const count_users_response = await fetch('https://ma-biblio-backend.vercel.app/api/auth/count', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	const count_users: {
		count: number;
	} = await count_users_response.json();

	return {
		categories,
		books,
		count_books,
		count_emprunts,
		count_users
	};
};
