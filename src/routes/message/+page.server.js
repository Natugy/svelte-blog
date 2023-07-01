// @ts-ignore
import * as db from '$lib/db/database'

/** @type {import('./$types').PageServerLoad} */
export function load({ cookies }) {
	const id = cookies.get('userid');

	if (!id) {
		cookies.set('userid', crypto.randomUUID(), { path: '/' });
	}

	return {
		messages: JSON.parse(JSON.stringify(db.getMessage(id))) 
	};
}

export const actions = {
	// @ts-ignore
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		db.addMessage(cookies.get('userid'), data.get('description'));
	}
};