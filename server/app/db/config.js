import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`MongoDB Connected: ${db.connection.host}`);
  } catch (err) {
    throw new Error(err.message);
  }
};

export default connectDB;
