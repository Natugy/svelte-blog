<script>
    // import { connectToDatabase } from '$lib/mongodb.js';
  import { onMount } from 'svelte';

  export let data;
  // console.log(data);
  let details = data.movieDetails
</script>

<main>
  
    <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}  alt="">
    <h1>{details.title}</h1>
    <p>Release Date: {details.release_date}</p>
    <p>Overview: {details.overview}</p> 

  <!-- {#if data.review === null}
    <p> no review</p>
    <form method="POST">
      <label>
        Votre ressentis :
        <input
          name="review"
          autocomplete="off"
        />
      </label>
    </form>
    {:else}
    <p>{data.review.review}</p>
  {/if}   -->
</main>
