/** @type {import('./$types').PageServerLoad} */
export const load = async ({ url }) => {
	const category_id = url.searchParams.get('category');

	let books: {
		id: number;
		titre: string;
		auteur: string;
		la_date: number;
		resume: string;
		image: string;
		categorie: number;
		isbn: string;
		copies: number;
	}[];
	let category: {
		id: number;
		name: string;
		image: string;
		description: string;
	};

	if (category_id) {
		const books_response = await fetch(
			`https://ma-biblio-backend.vercel.app/api/livre/category/${category_id}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
		const category_response = await fetch(
			`https://ma-biblio-backend.vercel.app/api/categorie/${category_id}/`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
		category = await category_response.json();
		books = await books_response.json();
	} else {
		const books_response = await fetch('https://ma-biblio-backend.vercel.app/api/livre/all', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		books = await books_response.json();
		category = {
			id: 0,
			name: '',
			image: '',
			description: ''
		};
	}

	return {
		books,
		category_id,
		category
	};
};
