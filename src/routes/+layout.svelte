<script>
  export let data;

</script>

<body>
    <header>
    <nav>
        <a href="/"> home</a>
        <a href="/search"> Recherche film</a>
        <a href="/reviews">reviews</a>
        {#if data.adminMode}
        <form method="POST" action="/api"><button>disconnect</button></form>
        {/if}
    </nav>
</header>
<main>
    <slot/>
</main>

<footer>
    <p> ceci est mon <a href="/adminMode">footer</a> </p>
</footer>
</body>



<style>
    /* CSS pour le corps de la page */
body {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* CSS pour l'en-tête */
/* CSS pour l'en-tête */
header {
  background-color: #f1f1f1;
  padding: 20px;
}

/* CSS pour la barre de navigation */
nav {
  display: flex;
  justify-content: center;
}

/* CSS pour chaque partie de la barre de navigation */
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #333333;
  font-weight: bold;
}

/* CSS pour le contenu principal */
main {
  flex-grow: 1;
  background-color: #ffffff; 
}

/* CSS pour le pied de page */
footer {
  background-color: #f1f1f1;
  padding: 20px;
  display: flex;
  justify-content: center;
  margin-top: auto;
}

</style>