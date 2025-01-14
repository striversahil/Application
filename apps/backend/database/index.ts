import mongoose from "mongoose";

const db_Name = "Apotza_Backend";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState < 1) {
      const connectionInstance = await mongoose.connect(
        `${process.env.MONGODB_URI as string}/${db_Name as string}?retryWrites=true&w=majority`
      );
      if (connectionInstance) {
        console.log(
          `Connected to database Successfully ✨ : ${connectionInstance.connection.host}`
        );
      }
    }
    console.log("Already Connected to database 🚀");
  } catch (error) {
    console.log(
      `${error as Error} \n ⚠️${" "} Error connecting to Database with Mongoose`
    );
  }
};

export default connectDB;
