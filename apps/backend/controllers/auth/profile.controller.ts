import { Request, Response } from "express";
import ApiResponse from "@repo/helper/ApiResponse";
import asyncHandler from "@repo/helper/asyncHandler";
import { Profile } from "@repo/models/auth/profile.model";

const getProfile = asyncHandler(async (req: Request, res: Response) => {
  const profile = await Profile.findOne({ user: req.body });
  return res.status(200).json(
    new ApiResponse(
      200,
      {
        profile: profile,
      },
      "Profile Fetched Successfully"
    )
  );
});
