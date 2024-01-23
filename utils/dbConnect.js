import mongoose from 'mongoose';

const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING

const dbConnect = async () => {
  console.log('db connected');
  try {
    console.log('hello tried')
    if (mongoose.connection.readyState !== 1) {
      console.log('mongose.connection');
      await mongoose.connect('mongodb+srv://rapsan363:NshFqcRnuwloF96J@cluster0.mw6iqkn.mongodb.net/finaldbms?retryWrites=true&w=majority', {
        useUnifiedTopology: true,


      });
      console.log('Connected to MongoDB');
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

export default dbConnect;
