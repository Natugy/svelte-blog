
import { detailMovie } from "$lib/db/movie";
import clientPromise from "$lib/db/mongodb.js";
import { MONGO_DB } from "$env/static/private";
import { findById, transformToJSON } from "$lib/services/reviewService.js";

// @ts-ignore
export async function load({ params, cookies }) {
  const { id } = params;
  
  try {
    const response = await detailMovie(id)
    const movieDetails = await response.json();
    const dataReview = await findById(id);
    let adminMode = false
    if(cookies.get('admin')){
      
      adminMode = true;
    }
    let review
    if(!dataReview){
      review= dataReview
    }
    else {
      review= transformToJSON(dataReview)
    }

    return {
      movieDetails,
      review,
      adminMode 
    };
  } catch (error) {
    console.error('Erreur lors de la récupération des détails du film :', error);
    return {
      status: 500,
      error: 'Erreur lors de la récupération des détails du film'
    };
  }
}

export const actions = {
	publish: async ({ cookies, request, params }) => {
    const { id } = params
    const response = await detailMovie(id)
    const movieDetails = await response.json();
		const data = await request.formData();
    const testDb = (await clientPromise).db(MONGO_DB)
    testDb.collection("review").insertOne({
      movieId: id,
      movieTitle: movieDetails.title,
      title: data.get('title'), 
      review: data.get('review'),
      note: data.get('note')})
	}
};