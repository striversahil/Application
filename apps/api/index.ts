import express from "express";
import connectDB from "./database";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
const app = express();

connectDB();

app.use(cors());

app.get("/", (req, res) => {
  res.status(400).json({ name: "Alice", msg: "This Message is from API" });
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port ", process.env.PORT);
  // console.log(process.env);
});
