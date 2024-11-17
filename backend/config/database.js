import mongoose from "mongoose";
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: "./backend/config/config.env" });

// Connect to MongoDB
const connectDBatabase= async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDBatabase;

// Start of Selection
connectDB(); // Call the function to connect to the database
