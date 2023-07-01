import { MONGO_URI } from '$env/static/private';
import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
    
    const client = new MongoClient(MONGO_URI);
    await client.connect();
  
    return client.db('blogdb');
  }
  

