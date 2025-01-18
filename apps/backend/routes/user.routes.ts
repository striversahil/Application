import mongoose from "mongoose";

import { signIN, registerUser } from "../controllers/auth/user.controller";
import { Testing } from "../controllers/auth/workspace.controller";

import { Router } from "express";
import authenticate from "../middleware/auth.middleware";

const router = Router();

// Login Routes
router.route("/signup").post(registerUser);
router.route("/signin").post(signIN);

// WorkSpace Routes
router.route("/workspace/:workspaceId").post(authenticate, Testing);

// Project Routes
router.route("/project/:projectId").post(authenticate, Testing);

// Middleware Testing
router.route("/auth").get(authenticate, async (req, res) => {
  try {
    res.status(200).json({ message: "User Authenticated", user: req.user });
  } catch (error) {
    console.log("Error in Auth Middleware", error);
  }
});

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Welcome to User Routes" });
});

export default router;
