class MessageData {
    /**
     * @param {any} message
     */
    constructor(message){
        this.id = crypto.randomUUID;
        this.content=message
       
        this.nbLikes = 0;
        // @ts-ignore
        this.likes = []
    }
}
export default MessageData;