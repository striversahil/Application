import express from "express";
import cors from "cors";
import { createServer } from "http";
import userRoute from "./routes/user.routes";
// import bodyParser from "body-parser";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const httpServer = createServer(app);

app.use(cors());

app.use("/user", userRoute);

export default httpServer;
