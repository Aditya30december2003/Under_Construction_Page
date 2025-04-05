import { Client, Databases, Storage, Query, ID } from 'appwrite';

// Initialize the Appwrite client
const client = new Client();
client
  .setEndpoint('https://centralapps.hivefinty.com/v1')
  .setProject('67f12af70018f5ee9751');

// Initialize the Databases service
const databases = new Databases(client);

// Initialize the Storage service
const storage = new Storage(client);

export { client, databases, storage, Query, ID };