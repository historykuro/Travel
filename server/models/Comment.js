import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    text: {
      type: String,
      trim: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },

    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
