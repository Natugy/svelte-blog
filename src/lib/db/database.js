import MessageData from "../types/messagesData";

const db = new Map()

/**
 * @param {any} userid
 */
export function getMessage(userid) {
    if (!db.get(userid)) {
        db.set(userid,[new MessageData("first caca")])
    }
    return db.get(userid)
}

/**
 * @param {any} userid
 * @param {any} message
 */
export function addMessage(userid, message){
    const messages = db.get(userid)

    messages.push(new MessageData(message));
}