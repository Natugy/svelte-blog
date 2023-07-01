<script>
    // import { connectToDatabase } from '$lib/mongodb.js';
  import { onMount } from 'svelte';

  export let data;

</script>

<main>
  {#await data.movieDetails}
    <p>Chargement des détails du film...</p>
  {:then details}
    <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}  alt="">
    <h1>{details.title}</h1>
    <p>Release Date: {details.release_date}</p>
    <p>Overview: {details.overview}</p>
    <!-- Ajoutez d'autres informations du film que vous souhaitez afficher -->
  {:catch error}
    <p>Erreur lors de la récupération des détails du film : {error.message}</p>
  {/await}
  {#if data.review === undefined}
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
    <p>{data.review}</p>
  {/if}
</main>
