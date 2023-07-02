<script>
    import PreviewReview from "$lib/components/PreviewReview.svelte";

    
    export let data;
</script>

{#each data.reviews as review}
    <PreviewReview review={review}/>
{/each}