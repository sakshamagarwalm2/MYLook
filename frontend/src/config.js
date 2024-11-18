import * as sdk from "node-appwrite";

// Check if required environment variables are present
if (!process.env.NEXT_PUBLIC_ENDPOINT || 
    !process.env.PROJECT_ID || 
    !process.env.API_KEY || 
    !process.env.DATABASE_ID) {
    throw new Error('Required environment variables are missing');
}

// Export environment variables
export const {
    NEXT_PUBLIC_ENDPOINT: ENDPOINT,
    PROJECT_ID,
    API_KEY,
    DATABASE_ID,
    ABOUT_COLLECTION_ID,
    TIMELINE_COLLECTION_ID,
    PROJECTS_COLLECTION_ID,
    BUCKET_ID,
} = process.env;

// Initialize Appwrite client
const client = new sdk.Client();

// Configure client
client
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID)
    .setKey(API_KEY);

// Initialize and export Appwrite services
export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);

const result = await databases.listDocuments(
    DATABASE_ID, // databaseId
    TIMELINE_COLLECTION_ID, // collectionId
);

console.log(result);

export default client;