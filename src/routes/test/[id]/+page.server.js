
import { addReview, getReview } from "$lib/db/reviewDb.js";
import { detailMovie } from "$lib/movie";

// @ts-ignore
export async function load({ params }) {
  const { id } = params;
  
  try {
    const response = await detailMovie(id)
    const movieDetails = await response.json();
    const review = getReview(id);
    

    // console.log(movieDetails);
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
	default: async ({ cookies, request, params }) => {
    const { id } = params
		const data = await request.formData();
		addReview(id, data.get('review'));
	}
};