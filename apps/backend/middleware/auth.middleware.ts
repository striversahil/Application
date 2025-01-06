import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import ApiResponse from "../helper/ApiResponse";

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
  jwt.verify(token, "sahil", (err: any, decoded: any) => {
    if (err) {
      return res
        .status(401)
        .json(new ApiResponse(401, {}, "Redirecting to login..."));
    }
    req.user = decoded;
  });
  next();
};

export default authenticate;
