import mongoose from 'mongoose';

// Define the User schema
const userSchema = new mongoose.Schema({
  timeline:[
    {
      title: String,
      description: String,
      date: Date
    }
  ],
  skills: [
    {
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      progress: {
        type: Number,
        required: true,
      },
      color: {
        type: String,
        required: true,
      },
    }
  ],
  about: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    technologies: [String],
    stats: [
      {
        value: String,
        label: String,
      },
    ],
    certifications: [String],
    resume: {
      type: String, // URL or path to the resume PDF
    },
  },
projects: [
  {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  }
],
});

// Create the User model
const User = mongoose.model('User', userSchema);

export default User;
