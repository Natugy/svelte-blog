<script>
    // import { connectToDatabase } from '$lib/mongodb.js';
  import { onMount } from 'svelte';

  export let data;
  
  let details = data.movieDetails
  let note = 0
</script>

<div class="container">
    <img src={`https://image.tmdb.org/t/p/w500/${data.movieDetails.poster_path}`}  alt="">
    <div class="left-container">
      <div class="movie-detail">
        <h1>{data.movieDetails.title}</h1>
        <p>Release Date: {data.movieDetails.release_date}</p>
        <p>Overview: {data.movieDetails.overview}</p> 
      </div>
      

    
  

      {#if data.review === null }
      {#if data.adminMode}
      <form method="POST" action="?/publish">
        <h2>Ajouter un avis</h2>
          <label>
            Titre de la review
            <input
              name="title"
              autocomplete="off"
              required
            />
          </label>
          <label >
            Review
            <textarea name="review" required ></textarea>
          </label>
          <label>
            Note : {note}
            <input name="note" type="range" bind:value={note} min="0" max="10" />
          </label>
          <button>envoyer</button>
        </form>
      {/if}
        {:else}
        <div class="review">
          <h2>L'avis de Natugy :</h2>
          <h3>{data.review.title}</h3>
          <p>{data.review.review}</p>
          <h4>Note : {data.review.note}</h4>

        </div>
      {/if}
    </div>  
</div>


<style>
  form {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
}

label {
  margin-bottom: 10px;
}

input,
textarea {
  width: 95%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input[type="range"] {
  width: 95%;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  margin-bottom: 10px;
  text-align: justify; /* Ajout de la propriété text-align */
}

/* Média queries pour les écrans d'ordinateur */
@media screen and (min-width: 768px) {
  .container {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  img {
    margin-right: 20px;
    margin-bottom: 0px;
  }
}

.review {
  padding-top: 25px;
  max-width: 1200px;
  margin: 0 auto;
}

.review h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.review h3 {
  font-size: 20px;
  margin-bottom: 5px;
}

.review p {
  font-size: 16px;
  margin-bottom: 10px;
}

.review h4 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}


</style>