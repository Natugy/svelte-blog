<script>
// @ts-nocheck

    import Message from '$lib/components/Message.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
</script>
<div>
    {#each data.messages as message }
        <Message message={message}/>
    {/each}
    <form method="POST">
		<label>
			add a todo:
			<input
				name="description"
				autocomplete="off"
			/>
		</label>
	</form>
</div>