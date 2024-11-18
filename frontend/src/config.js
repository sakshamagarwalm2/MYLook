import * as sdk from "node-appwrite";

// Check if required environment variables are present
if (!process.env.REACT_APP_NEXT_PUBLIC_ENDPOINT || 
    !process.env.REACT_APP_PROJECT_ID || 
    !process.env.REACT_APP_API_KEY || 
    !process.env.REACT_APP_DATABASE_ID) {
    throw new Error('Required environment variables are missing');
}

// Export environment variables
export const {
    REACT_APP_NEXT_PUBLIC_ENDPOINT: ENDPOINT,
    REACT_APP_PROJECT_ID: PROJECT_ID,
    REACT_APP_API_KEY: API_KEY,
    REACT_APP_DATABASE_ID: DATABASE_ID,
    REACT_APP_ABOUT_COLLECTION_ID: ABOUT_COLLECTION_ID,
    REACT_APP_TIMELINE_COLLECTION_ID: TIMELINE_COLLECTION_ID,
    REACT_APP_PROJECTS_COLLECTION_ID: PROJECT_COLLECTION_ID,
    REACT_APP_BUCKET_ID: BUCKET_ID,
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