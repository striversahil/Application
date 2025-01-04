import express from "express";
import mongoose from "mongoose";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Wosrldly!");
});

app.listen(3005, () => {
  console.log("Server is running on port 3000");
});
