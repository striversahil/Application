import mongoose from "mongoose";

const db_Name = "Apotza_Backend";

const connectDB = async () => {
  if (mongoose.ConnectionStates.connected < 1) {
    try {
      const connectionInstance = await mongoose.connect(
        `${process.env.MONGODB_URI as string}/${db_Name as string}?retryWrites=true&w=majority`
      );

      connectionInstance.connection.on("connected", () => {
        console.log(
          `Connected to database  Successfully 🚀: ${connectionInstance.connection.host}`
        );
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
