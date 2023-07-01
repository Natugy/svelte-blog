const db = new Map()

/**
 * @param {any} movieId
 */
export function getReview(movieId) {
    
    return db.get(movieId)
}

// @ts-ignore
export function addReview(movieId, message){
    db.set(movieId,message)
}