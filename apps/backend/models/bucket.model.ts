import mongoose from "mongoose";

const BucketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  files: {
    type: [String],
    default: [],
  },
});

export const Bucket = mongoose.model("Bucket", BucketSchema);
