import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://dipendra14:lL9PD8YonKxUFAje@cloudproai.vjb5vdv.mongodb.net/cloudProAi?retryWrites=true&w=majority';

const dbConnect = async () => {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(MONGODB_URI, {
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

export default dbConnect;
