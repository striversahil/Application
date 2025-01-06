import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import ApiResponse from "../helper/ApiResponse";

const authenticate = (
  req: Response,
  res: Response,
  next: NextFunction
): any => {
  const { token } = req.cookie.jwt;
  if (!token) {
    return res
      .status(401)
      .json(new ApiResponse(401, {}, "Redirecting to login..."));
  }
  return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET as string);
};

export default authenticate;
