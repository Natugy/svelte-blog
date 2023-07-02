<script>
// @ts-nocheck

    import { detailMovie, searchMovies } from "$lib/db/movie";

    /**
     * @type {{ id: any; review: any; }}
     */
     export let review
    
</script>
<div class="review">
    <a href="/test/{review.movieId}"><h3>{review.movieTitle}</h3></a>
    <p>{review.title}</p>
    <p>Note : {review.note}</p>
</div>

<style>
.review {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 20px;
}

.review a {
  text-decoration: none;
}

.review h3 {
  font-size: 18px;
  margin-bottom: 5px;
}

.review p {
  margin-bottom: 5px;
}

</style>