import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.status(400).json([{ name: "Alice", msg: "This Message is from API" }]);
});

app.listen(4000, () => {
  console.log("Server is running on port 3000");
});
