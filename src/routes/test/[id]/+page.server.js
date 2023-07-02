
import { detailMovie } from "$lib/db/movie";
import clientPromise from "$lib/db/mongodb.js";
import { MONGO_DB } from "$env/static/private";
import { findById } from "$lib/services/reviewService.js";

// @ts-ignore
export async function load({ params }) {
  const { id } = params;
  
  try {
    const response = await detailMovie(id)
    const movieDetails = await response.json();
    const dataReview = await findById(id);
    // console.log(movieDetails); 
     let review
    if(!dataReview){
      review= dataReview
    }
    else {
      let jsonData = JSON.stringify(dataReview)
      review= JSON.parse(jsonData)
    }

    console.log(review);
    return {
      movieDetails,
      review 
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
		const data = await request.formData();
    const testDb = (await clientPromise).db(MONGO_DB)
    testDb.collection("review").insertOne({id, review: data.get('review')})
		
	}
};