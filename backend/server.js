import { app } from './app.js'; // Import the app from app.js
import dotenv from 'dotenv'; // Import dotenv to manage environment variables
import {connectDBatabase} from "./config/database.js"

dotenv.config({path:"./backend/config/config.env"}); // Load environment variables from .env file

const PORT = process.env.PORT // Set the port from environment variable or default to 3000

connectDBatabase();

app.listen(PORT, () => {
  console.log(`Server is running on :${PORT}`); // Log the server URL
});
