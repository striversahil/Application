import mongoose, { Mongoose } from "mongoose";

interface Workspace {
  name: string;
  user: mongoose.Schema.Types.ObjectId;
  members: string[];
}

const WorkspaceSchema: mongoose.Schema<Workspace> = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Workspace = mongoose.model("Workspace", WorkspaceSchema);
