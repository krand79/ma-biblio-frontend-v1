import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

const loginSchema = z.object({
	email: z.string().email()
});

export const load = async (event: any) => {
	const form = await superValidate(event, loginSchema);
	return { form };
};

export const actions = {
	default: async (event: any) => {
		const form = await superValidate(event, loginSchema);
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		return { form };
	}
};
