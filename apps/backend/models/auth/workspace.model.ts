import mongoose from "mongoose";

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
  private: boolean;
  members: Member[];
  projects: mongoose.Schema.Types.ObjectId[];
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
    private: {
      type: Boolean,
      default: false,
    },
    projects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
      },
    ],
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

// add default admin if not added
WorkspaceSchema.pre("save", function (next) {
  if (this.isModified("members")) return next();
  this.members.push({ member: this.user, role: Role.admin });
  next();
});

export const Workspace = mongoose.model("Workspace", WorkspaceSchema);
