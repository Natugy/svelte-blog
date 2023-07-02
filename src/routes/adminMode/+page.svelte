<script>
   
    /** @type {import('./$types').ActionData} */
    export let form;
</script>
  
  
<h1>Connexion Administrateur</h1>

<form method="POST" action="?/connection">
    <label>
    Mot de passe :
    <input type="password" name="adminMdp" />
    </label>
    <button type="submit">Se connecter</button>
</form>

{#if form?.failed}
<!-- this message is ephemeral; it exists because the page was rendered in
        response to a form submission. it will vanish if the user reloads -->
<p>Try again</p>
{/if}
  

  