<script>
// @ts-nocheck

    
     export let film;
  
    
  </script>
  
  <div class="movie-item">
    <div class="movie-item-image">
      <img src='https://image.tmdb.org/t/p/w500/{film.poster_path}' alt="Affiche du film" width="100" height="150">

    </div>
    <div class="movie-item-details">

      <a href="test/{film.id}"> <h3>{film.title}</h3></a>
      <p>{film.release_date}</p>
    </div>
  </div>
  
  <style>
    .movie-item {
      display: flex;
      align-items: center;
      cursor: pointer;
      margin-bottom: 20px;
    }
  
    .movie-item-image {
      margin-right: 10px;
    }
  
    .movie-item-image img {
      display: block;
    }
  
    .movie-item-details {
      display: flex;
      flex-direction: column;
    }
  </style>