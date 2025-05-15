import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on('connected', () => {
    console.log("Database connected");
  });

  // DB name already included in URI — just use it directly
  await mongoose.connect(process.env.MONGODB_URI);
};

export default connectDB;
