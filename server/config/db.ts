import mongoose from 'mongoose';

const connectMongoDB = async () => {
  try {
    await mongoose.connect('mongodb://username:password@localhost:27017/quotes', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });

    console.log('MongoDB connected successfully');
  } catch (error: any) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

export default connectMongoDB;