/**
 * @param {any} query
 */

import { PUBLIC_API_KEY } from "$env/static/public";
/**
 * @param {any} query
 */
export function searchMovies(query) {
    return new Promise((resolve, reject) => {
      fetch(`https://api.themoviedb.org/3/search/movie?language=fr-FR&api_key=${PUBLIC_API_KEY}&query=${query}`)
        .then(response => response.json())
        .then(data => {
          resolve(data.results);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
 * @param {any} query
 */
  export function detailMovie(query){
    return fetch(`https://api.themoviedb.org/3/movie/${query}?language=fr-FR&api_key=${PUBLIC_API_KEY}`);
  }
  