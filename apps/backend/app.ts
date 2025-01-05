import Express from "express";
import cors from "cors";
import { createServer } from "http";
import userRoute from "./routes/user.routes";
const bodyParser = require("body-parser");

const app = Express();

app.use(bodyParser.json());

const httpServer = createServer(app);

app.use(cors());

app.use("/user", userRoute);

export default httpServer;
