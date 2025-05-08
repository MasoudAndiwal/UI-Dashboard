import { Account, Client, Databases, Storage } from 'appwrite';
import type { p } from 'node_modules/@react-router/dev/dist/routes-DHIOx0R9';

export const appwriteClient = {
    endpoint: process.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1',
    project: process.env.VITE_APPWRITE_PROJECT || 'default_project_id',
    apiKey: process.env.VITE_APPWRITE_API_KEY || 'standard_d8641215c1cb9b5aac105cd514bf8733979692a75c8b9121a2e248b0284f572a42003234e6db9147611eb4f75c0812132cae35ab3d7308306cd5027b559a78dc5b194ec679a550f4461ef24196e471c80ced4b594560421a110393b37a1fd4e21c2976b88d9874fe8512fa1b21e9208b48a4da79b046538f6454efa16972badf',
    databaseId: process.env.VITE_APPWRITE_DATABASE_ID || '681c77d100006af5064e',
    userCollectionId: process.env.VITE_APPWRITE_USER_COLLECTION_ID || '681c782a0027daff7bf4',
    TripCollectionId: process.env.VITE_APPWRITE_TRIP_COLLECTION_ID || '681c7b67000d6b48877f',
}; 

export const appwriteConfig = {
    databaseId: 'your-database-id',
    userCollectionId: 'your-user-collection-id',
    ID: {
        unique: 'unique()', // Helper for generating unique IDs
    },
};

const client = new Client()
    .setEndpoint(appwriteClient.endpoint ) // Your API Endpoint
    .setProject(appwriteClient.project); // Your project ID

const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client); // Fixed variable name to lowercase 'storage'
export { client, account, database, storage ,  }; // Updated export to lowercase 'storage'