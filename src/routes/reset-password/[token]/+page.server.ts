import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

const loginSchema = z.object({
	password: z.string().min(6)
});

/** @type {import('./$types').PageServerLoad} */
export const load = async (event: any) => {
	const form = await superValidate(event, loginSchema);
	return {
		form: form,
		token: event.params.token
	};
};

export const actions = {
	default: async (event: any) => {
		const form = await superValidate(event, loginSchema);
		console.log(form);
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		return { form };
	}
};
