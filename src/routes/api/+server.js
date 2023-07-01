import { connectToDatabase } from "$lib/db/mongodb";
import { json } from "@sveltejs/kit";

export async function POST({ request, cookies }) {
	const { description } = await request.json();

	const movie = description
    const db = await connectToDatabase();
    const collection = db.collection('test');

    // Insérer les détails du film dans la collection
    const result = await collection.insertOne(movie);
    console.log('Film ajouté avec succès:', result.insertedId);
	return json({ result }, { status: 201 });
}