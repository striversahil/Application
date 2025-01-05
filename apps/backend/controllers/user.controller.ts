import bcrypt from "bcrypt";
import ApiResponse from "../helper/ApiResponse";
import asyncHandler from "../helper/asyncHandler";
import { User } from "../models/user.model";
import { Request, Response, NextFunction } from "express";

const registerUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password }: any = req.body;
    console.log(req.body);

    const user = new User({
      name: name,
      email: email,
      password: password,
    });

    await User.create({
      name: name as string,
      email: email as string,
      password: password as string,
    });

    return res.status(201).json(
      new ApiResponse(
        201,
        {
          username: name,
          message: "Sala pagal ho gaya itna der tak na ho paya 🥲 ",
          user: password,
        },
        "User Created Successfully"
      )
    );
  }
);

const signIN = asyncHandler(({ req, res }: any) => {
  return res.status(200).json(new ApiResponse(200, "User  Signed In Done"));
});

export { registerUser, signIN };
