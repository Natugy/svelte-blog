import { MONGO_DB } from "$env/static/private"
import clientPromise from "$lib/db/mongodb"

/**
 * @param {any} id
 */
export async function findById(id){
    try {
        const db = (await clientPromise).db(MONGO_DB)
        const review = await db.collection("review").findOne({id : id})
        return review
    } catch (error) {
        console.error('Erreur lors de la recherche du film par titre:');
        throw error;
    }
}

export async function findAll() {
    try{
        const db = (await clientPromise).db(MONGO_DB)
        const reviews = await db.collection("review").find().toArray()
        return reviews
    }
    catch(error){
        console.error('Review introuvable')
        throw error
    }
}

/**
 * @param {any} data
 */
export function transformToJSON(data) {
    const dataStr = JSON.stringify(data)
    return JSON.parse(dataStr)
}