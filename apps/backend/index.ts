import connectDB from "./database";

import httpServer from "./app";
import { configDotenv } from "dotenv";

configDotenv({
  path: "./.env",
});

const Server = () => {
  httpServer.listen(process.env.PORT, () => {
    console.log("Server is running on port ", process.env.PORT);
  });
};

connectDB()
  .then(() => {
    Server();
  })
  .catch((err) => {
    console.log("⚠️ Error connecting to Database with Mongoose", err);
  });
