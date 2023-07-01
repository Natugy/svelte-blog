import { PUBLIC_MONGO_DB } from "$env/static/public"
import clientPromise from "$lib/db/mongodb"

/**
 * @param {any} id
 */
export async function findById(id){
    try {
        const db = (await clientPromise).db(PUBLIC_MONGO_DB)
        const review = await db.collection("review").findOne({id : id})
        return review
    } catch (error) {
        console.error('Erreur lors de la recherche du film par titre:');
        throw error;
    }
}