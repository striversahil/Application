import mongoose from "mongoose";

import { userController } from "../controllers/user.controller";

import { Router } from "express";
// import userController from "../controllers/user.controller.ts";

const router = Router();

router.route("/signup").post(userController);

router.get("/signin", async (req, res) => {
  res.status(200).json({ message: "User Signed In Done" });
});

router.get("/scam", async (req, res) => {
  res.status(200).json({ message: "User Scammed Money :(" });
});
export default router;
