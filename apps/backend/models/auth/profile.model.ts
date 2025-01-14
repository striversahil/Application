import mongoose from "mongoose";

enum SocialsSource {
  facebook = "facebook",
  twitter = "twitter",
  instagram = "instagram",
  github = "github",
  linkedin = "linkedin",
}

interface Socials {
  source: SocialsSource;
  url: string;
}

interface Profile {
  name: {
    firstName: string;
    lastName: string;
  };
  user: mongoose.Schema.Types.ObjectId;
  profilePic: string;
  bio: string;
  location: string;
  socials: string[];
}

const ProfileSchema: mongoose.Schema<Profile> = new mongoose.Schema({
  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  profilePic: {
    type: String,
    default: "",
  },
  bio: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    default: "",
  },
  socials: {
    type: [String],
    enum: ["facebook", "twitter", "instagram", "github", "linkedin"],
    default: [],
  },
});

export const Profile = mongoose.model("Profile", ProfileSchema);
