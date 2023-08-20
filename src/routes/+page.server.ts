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

	return {
		categories,
		books,
		count_books
	};
};
