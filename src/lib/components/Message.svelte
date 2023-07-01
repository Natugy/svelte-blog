<script>
    // @ts-ignore
    import MessageData from "$lib/types/messagesData";
     /**
     * @type {MessageData}
     */
      export let message;
    //   console.log(message);
      function addLikes(){
        message.nbLikes +=1;
      }
</script>

<div class=message>
    <p class="content">{message.content}</p>
    <p>Nombre de like = {message.nbLikes}</p>
    <button on:click={addLikes}>Like</button>
</div>

<style>
    .message {
        margin: 10px;
        border: 2px;
        border-color: black;
        border-radius: 15%;
    }
    .content{
        color: red;
        margin: 1;
    }
    p{
        margin: 2px;
    }
    

</style>