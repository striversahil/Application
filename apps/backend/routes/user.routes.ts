import mongoose from "mongoose";

import { Router } from "express";
// import userController from "../controllers/user.controller.ts";

const router = Router();

router.get("/signup", async (req, res) => {
  res.status(200).json({ message: "User Signed Up Done" });
});

router.get("/signin", async (req, res) => {
  res.status(200).json({ message: "User Signed In Done" });
});

router.get("/scam", async (req, res) => {
  res.status(200).json({ message: "User Scammed Money :(" });
});
export default router;
