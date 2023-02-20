import moongoose from "mongoose";
import bcrypt from "bcrypt";

const RoomCommentSchema = new moongoose.Schema(
  {
    comment: String,
    room_id: { type: moongoose.Schema.Types.ObjectId, ref: "Room" },
    User_id: { type: moongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const RoomComment = moongoose.model("RoomComment", RoomCommentSchema);
export default RoomComment;
