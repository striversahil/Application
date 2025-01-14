import mongoose, { Mongoose } from "mongoose";

enum Role {
  admin = "admin",
  member = "member",
}

interface Member {
  member: mongoose.Schema.Types.ObjectId;
  role: Role;
}

type Workspace = {
  name: string;
  user: mongoose.Schema.Types.ObjectId;
  members: Member[];
  role: Role;
  createdAt: Date;
  updatedAt: Date;
};

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
        member: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        role: {
          type: String,
          enum: Object.values(Role),
          default: Role.member,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Workspace = mongoose.model("Workspace", WorkspaceSchema);
