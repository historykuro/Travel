import mongoose, { Schema } from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    photo: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      // type: String,
    },
    type: {
      type: String,
      required: true,
    },

    review: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],

    // comments: [
    //   {
    //     type: [String],
    //     default: {},
    //   },
    // ],
  },
  { timestamps: true }
);

const Room = mongoose.model("Room", RoomSchema);
export default Room;
