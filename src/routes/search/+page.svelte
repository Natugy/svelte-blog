<script>
    import { searchMovies } from '$lib/db/movie.js';
    import PreviewMovie from '../../lib/components/PreviewMovie.svelte';
    
  
    /**
     * @type {string | any[]}
     */
    let movies = [];
    let query = '';
  
    function performSearch() {
      searchMovies(query)
        .then((/** @type {any[]} */ results) => {
          // console.log(results);
          movies = results;
          
        })
        .catch((/** @type {any} */ error) => {
          console.error('Erreur lors de la recherche de films :', error);
        });
    }
  </script>
  
  <main>
    <h1>Recherche de films</h1>
  
    <form on:submit|preventDefault="{performSearch}">
      <input class="search-input" type="text" bind:value="{query}" on:input="{performSearch}" placeholder="Entrez un titre de film" />
    </form>
  
    {#if movies.length > 0}
      <h2>Résultats de recherche :</h2>
      
      <div class="results">
        {#each movies as movie}
          <div class="movie-item">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
            <a href="/test/{movie.id}"><h4>{movie.title}</h4></a>
            
            <p>Année : {movie.release_date}</p>
            <p>{movie.overview}</p>
          </div>
        {/each}
      </div>
    {:else}
      {#if query.length > 0}
        <p>Aucun résultat trouvé.</p>
      {/if}
    {/if}
  </main>
  
  <style>

.search-input {
  width: 90%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

.results {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
}

.movie-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.movie-item img {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.movie-item h4 {
  font-size: 18px;
  margin-bottom: 5px;
}

.movie-item p {
  margin-bottom: 5px;
}

  </style>