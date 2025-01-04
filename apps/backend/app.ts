import Express from "express";
import cors from "cors";
import { createServer } from "http";
import userRoute from "./routes/user.routes";

const app = Express();

const httpServer = createServer(app);

app.use(cors());

app.use("/user", userRoute);

export default httpServer;
