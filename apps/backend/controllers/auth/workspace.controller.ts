import { Request, Response } from "express";
import ApiResponse from "../../helper/ApiResponse";
import asyncHandler from "../../helper/asyncHandler";

const Testing = asyncHandler(async (req: Request, res: Response) => {
  const Id = req.params.workspaceId;

  return res
    .status(200)
    .json({ message: "Welcome to Workspace Routes", Id: Id });
});

export { Testing };
