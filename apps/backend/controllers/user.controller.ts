import bcrypt from "bcrypt";
import ApiResponse from "../helper/ApiResponse";
import asyncHandler from "../helper/asyncHandler";
import { User } from "../models/user.model";

const userController = asyncHandler(async ({ req, res }: any) => {
  const { name, email, password } = req.body;

  await User.create({ name, email, password });

  const hashedPassword = await bcrypt.hash(password, 10);

  const createdUser = new User({ name, email, hashedPassword });
  await createdUser.save();

  if (!createdUser) {
    return res.status(400).json(new ApiResponse(400, {}, "User not created"));
  }

  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        { username: name, message: "User Created", email },
        "User Created"
      )
    );
});

export { userController };
