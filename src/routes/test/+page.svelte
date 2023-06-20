<script>
    import { fade } from "svelte/transition";
    let counter =0;
    let visible = true;

    function increase() {
        counter+=1;
        if (counter>10) {
            visible =false;
        }
    }
</script>

<h2>Ceci est un test</h2>
<p>count = {counter}</p>
{#if visible}
    <p>C'est drole de faire ca</p>
{/if}
<button on:click={increase}>increase</button>