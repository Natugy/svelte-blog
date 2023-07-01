<script>
    import { searchMovies } from '$lib/movie.js';
    import PreviewMovie from '../../lib/components/PreviewMovie.svelte';
    
  
    /**
     * @type {string | any[]}
     */
    let movies = [];
    let query = '';
  
    function performSearch() {
      searchMovies(query)
        .then((/** @type {any[]} */ results) => {
          console.log(results);
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
      <input type="text" bind:value="{query}" on:input="{performSearch}" placeholder="Entrez un titre de film" />
      <button type="submit">Rechercher</button>
    </form>
  
    {#if movies.length > 0}
      <h2>Résultats de recherche :</h2>
      
      <ul>
        <div class="movie-grid">
          {#each movies as movie}
            <PreviewMovie film={movie}/>
          {/each}
        </div>
      </ul>
    {:else}
      {#if query.length > 0}
        <p>Aucun résultat trouvé.</p>
      {/if}
    {/if}
  </main>
  <style>
    .movie-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
    }
  </style>