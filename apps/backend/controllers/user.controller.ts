import bcrypt from "bcrypt";
import ApiResponse from "../helper/ApiResponse";
import asyncHandler from "../helper/asyncHandler";
import { User } from "../models/user.model";
import { Request, Response, NextFunction } from "express";

const registerUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password }: any = req.body;
    console.log(req.body);

    await User.create({
      name: name as string,
      email: email as string,
      password: password as string,
    });

    //   if (!Name || !Email || !Password) {
    //     return res
    //       .status(400)
    //       .json(new ApiResponse(400, {}, "All fields are required"));
    //   }
    //   const user = await User.findOne({ email: email });
    //   if (user) {
    //     return res
    //       .status(400)
    //       .json(new ApiResponse(400, {}, "User already exists"));
    //   }

    // Check if all required fields are provided
    //     if (!name || !email || !password) {
    //       return res
    //         .status(400)
    //         .json(new ApiResponse(400, {}, "All fields are required"));
    //     }

    //   const user = new User({
    //     name: "Sahil",
    //     email: "email@email.com",
    //     password: "password",
    //   });

    //   await user.save();

    //   const createdUser = await User.findOne({ email: "email@email.com" });

    //   if (!createdUser) {
    //     return res.status(400).json(new ApiResponse(400, {}, "User not created"));
    //   }

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
