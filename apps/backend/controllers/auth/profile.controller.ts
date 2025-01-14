import { Request, Response } from "express";
import ApiResponse from "../../helper/ApiResponse";
import asyncHandler from "../../helper/asyncHandler";
import { Profile } from "../../models/auth/profile.model";

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
