import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.ConnectionStates.connected < 1) {
    try {
      const Connection = await mongoose.connect(
        process.env.MONGODB_URI as string
      );

      Connection.connection.on("connected", () => {
        console.log("Connected to database  Successfully 🚀");
      });
    } catch (error) {
      console.log(error);
    }
    console.log("Connected to database");
  } else {
    console.log("Already connected to database 🤖");
  }
};

export default connectDB;
