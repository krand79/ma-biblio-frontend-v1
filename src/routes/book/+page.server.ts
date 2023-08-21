/** @type {import('./$types').PageServerLoad} */
export const load = async ({ url }) => {
	const isbn = url.searchParams.get('isbn');

	type Book = {
		id: number;
		titre: string;
		auteur: string;
		la_date: number;
		resume: string;
		image: string;
		categorie: number;
		isbn: string;
		copies: number;
	};

	const book_response = await fetch(
		`https://ma-biblio-backend.vercel.app/api/livre/get_by_isbn/${isbn}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);
	const book: Book = await book_response.json();

	const category_response = await fetch(
		`https://ma-biblio-backend.vercel.app/api/categorie/${book.categorie}/`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);
	const category: {
		id: number;
		name: string;
		image: string;
		description: string;
	} = await category_response.json();

	return {
		book,
		category_name: category.name
	};
};
