import mongoose from "mongoose";

import { signIN, registerUser } from "../controllers/user.controller";

import { Router } from "express";
// import userController from "../controllers/user.controller.ts";

const router = Router();

router.route("/signup").post(registerUser);

router.route("/signin").get(signIN);

// router.get("/signin", async (req, res) => {
//   res.status(200).json({ message: "User Signed In Done" });
// });

router.post("/scam", async (req, res) => {
  res.status(200).json({ message: "User Scammed Money :(" });
});
export default router;
