import { MONGO_DB } from "$env/static/private";
import clientPromise from "$lib/db/mongodb";
import { json } from "@sveltejs/kit";

export async function POST({ request, cookies }) {
	const { description } = await request.json();

	const movie = description
    const db = (await clientPromise).db(MONGO_DB)
    const collection = db.collection('test');

    // Insérer les détails du film dans la collection
    const result = await collection.insertOne(movie);
    console.log('Film ajouté avec succès:', result.insertedId);
	return json({ result }, { status: 201 });
}