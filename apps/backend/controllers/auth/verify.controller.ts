import { Request, Response } from "express";
import asyncHandler from "../../helper/asyncHandler";
import ApiResponse from "../../helper/ApiResponse";
import { generateAccessRefreshToken } from "../../controllers/auth/user.controller";
import jwt, { JwtPayload } from "jsonwebtoken";

const authenticate = (req: Request, res: Response): any => {
  const token = req.cookies.access_token;

  if (!token) {
    return res
      .status(401)
      .json(
        new ApiResponse(401, {}, "No token found. \n Redirecting to login...")
      );
  }
  // Todo : Verify Token Safely
  jwt.verify(token, "sahil", async (err: any, decoded: any) => {
    if (err) {
      return res
        .status(401)
        .json(
          new ApiResponse(401, {}, "Error in token. \n Redirecting to login...")
        );
    }
    // Passing the User to the next middleware
    req.user = decoded;

    const Expiry_left_in_hours = (decoded.iat - decoded.exp) / (60 * 60);

    if (Expiry_left_in_hours < 10) {
      const tokenResponse = await generateAccessRefreshToken(decoded.email);
      if (!tokenResponse) {
        return res
          .status(500)
          .json(
            new ApiResponse(
              500,
              {},
              "User could not be authenticated due to server error"
            )
          );
      }
      res.cookie("jwt", tokenResponse.accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24 * 15, // 15 days
      });
    }
  });

  return res.status(200).json(new ApiResponse(200, {}, "User Authenticated"));
};

export default authenticate;
