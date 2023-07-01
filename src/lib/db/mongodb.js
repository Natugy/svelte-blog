import { MongoClient } from 'mongodb';
import { MONGO_URI } from "$env/static/private";
import { dev } from '$app/environment';

if (!MONGO_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const options = {};

let client;
 /**
     * @type {Promise<MongoClient>}
     */
let clientPromise;


  // In production mode, it's best to not use a global variable.
  // @ts-ignore
  client = new MongoClient(MONGO_URI, options);
  clientPromise = client.connect();
  

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
