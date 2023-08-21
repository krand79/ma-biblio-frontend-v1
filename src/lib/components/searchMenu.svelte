<script lang="ts">
	export let inputRect: any;
	export let min_books: any;
	export let search: any;

	let min_books_keys = Object.keys(min_books);
</script>

<ul
	class="menu absolute z-1 bg-base-200 flex flex-col w-full max-h-[400px] overflow-auto rounded-box mt-2
	"
	style="top: {inputRect.bottom - inputRect.y}px;"
>
	{#each min_books_keys as key}
		{#if min_books[key].filter((book) => book.titre
				.toLowerCase()
				.includes(search.toLowerCase())).length > 0}
			<li class="menu-title underline">{key}</li>
		{/if}
		{#each min_books[key].filter((book) => book.titre
				.toLowerCase()
				.includes(search.toLowerCase())) as book}
			<li>
				<a href="/book?isbn={book.isbn}" class="flex items-center">
					<img
						src={book.image}
						alt={book.titre}
						class="!w-10 !min-w-[40px] !h-10 rounded-full object-cover mr-2"
					/>
					<span>{book.titre}</span>
				</a>
			</li>
		{/each}
	{/each}
</ul>
