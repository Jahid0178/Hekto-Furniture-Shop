import mongoose from "mongoose";

const connection = {};

const connectMongoDB = async () => {
  if (connection.isConnected) {
    retrun;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected);
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
