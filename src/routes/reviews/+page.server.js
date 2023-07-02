// @ts-nocheck
import { findAll, transformToJSON } from '$lib/services/reviewService';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const reviewsData = await findAll()
    
    const reviews = transformToJSON(reviewsData)
    console.log(reviews);
    return {
        reviews
    };
};