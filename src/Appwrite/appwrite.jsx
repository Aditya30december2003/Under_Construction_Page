import { Client, Databases, Storage, Query, ID } from 'appwrite';

// Initialize the Appwrite client
const client = new Client();
client
  .setEndpoint('https://appwrite.hivefinty.com/v1')
  .setProject('684737e4000691eaf438');

// Initialize the Databases service
const databases = new Databases(client);

// Initialize the Storage service
const storage = new Storage(client);

export { client, databases, storage, Query, ID };