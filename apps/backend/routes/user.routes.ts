import mongoose from "mongoose";

import { signIN, registerUser } from "../controllers/user.controller";

import { Router } from "express";
import authenticate from "../middleware/auth.middleware";
// import userController from "../controllers/user.controller.ts";

const router = Router();

router.route("/signup").post(registerUser);

router.route("/signin").post(signIN);

router.route("/auth").get(authenticate, async (req, res) => {
  console.log(req.user);
  res.status(200).json({ message: "User Authenticated" });
});

router.post("/scam", async (req, res) => {
  res.status(200).json({ message: "User Scammed Money :(" });
});
export default router;
