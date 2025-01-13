import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import ApiResponse from "../helper/ApiResponse";
import { generateAccessRefreshToken } from "../controllers/user.controller";

declare global {
  namespace Express {
    interface Request {
      user: object;
      password: string;
    }
  }
}

const authenticate = (req: Request, res: Response, next: NextFunction): any => {
  const token = req.cookies.jwt;

  if (!token) {
    return res
      .status(401)
      .json(new ApiResponse(401, {}, "Redirecting to login..."));
  }
  // Todo : Verify Token Safely
  jwt.verify(token, "sahil", async (err: any, decoded: any) => {
    if (err) {
      return res
        .status(401)
        .json(new ApiResponse(401, {}, "Redirecting to login..."));
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
  next();
};

export default authenticate;
