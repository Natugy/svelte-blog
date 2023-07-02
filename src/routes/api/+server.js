import { MONGO_DB } from "$env/static/private";
import clientPromise from "$lib/db/mongodb";
import { json, redirect } from "@sveltejs/kit";

// @ts-ignore
export async function POST({ request, cookies }) {
	cookies.delete('admin');
    throw redirect(303, '/');
}