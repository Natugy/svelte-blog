<script>
    
    export let data;
</script>

{#each data.reviews as review}
    <p>{review.review}</p>
{/each}