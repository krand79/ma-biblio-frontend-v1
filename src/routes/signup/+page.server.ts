import { fail } from '@sveltejs/kit';
import { actionResult, message, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

const loginSchema = z
	.object({
		email: z.string().email(),
		name: z.string().min(3),
		password: z.string().min(6),
		passwordConfirm: z.string().min(6)
	})
	.refine((data) => data.password === data.passwordConfirm, {
		message: "Passwords don't match",
		path: ['passwordConfirm']
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
