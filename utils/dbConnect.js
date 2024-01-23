import mongoose from 'mongoose';

const MONGODB_CONNECTION_STRING = process.env.NEXT_PUBLIC_MONGODB_CONNECTION_STRING
console.log('hi this is new', process.env)

const dbConnect = async () => {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(MONGODB_CONNECTION_STRING, {
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

export default dbConnect;
