import connectDB from "./database";

import httpServer from "./app";
import { configDotenv } from "dotenv";

const now = new Date();

configDotenv({
  path: "./.env",
});

const Server = () => {
  httpServer.listen(process.env.PORT, () => {
    console.log(
      "Server is running on port :",
      process.env.PORT,
      `\n Date : ${now.toLocaleDateString()} \n Time : ${now.toLocaleTimeString()}`
    );
  });
};

connectDB()
  .then(() => {
    Server();
  })
  .catch((err) => {
    console.log("⚠️ Error connecting to Database with Mongoose", err);
  });
