import mongoose from "mongoose";

interface Project {
  name: string;
  user: mongoose.Schema.Types.ObjectId;
  workspace: mongoose.Schema.Types.ObjectId;
}

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  workspace: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Workspace",
    required: true,
  },
});

export const Project = mongoose.model("Project", ProjectSchema);
