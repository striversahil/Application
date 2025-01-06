import express from "express";
import cors from "cors";
import { createServer } from "http";
import cookieparser from "cookie-parser";
const app = express();
const httpServer = createServer(app);
// Keep this http Server at the top so to Implement Middlewares
import userRoute from "./routes/user.routes";
// import bodyParser from "body-parser";

app.use(express.json()); // for parsing application/json

app.use(cookieparser()); // for parsing cookies

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(cors());

app.use("/user", userRoute);

export default httpServer;
