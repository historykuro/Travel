import Room from "../models/Room";
import RoomComment from "../models/RoomComment.model";
import mongoose from "mongoose";
import express from "express";
import { verifyToken, verifyTokenAdmin } from "../middlewares/verifyToken.js";

const RoomCommentController = express.Router();

RoomCommentController.get("/", verifyToken, async (req, res) => {
  let room_id = req.params.room_id;
  if (!mongoose.Types.ObjectId.isValid(room_id)) {
    return res.status(400).send({
      message: "Invalid Room id",
      data: {},
    });
  }

  Room.findOne({ _id: room_id }).then(async (room) => {
    if (!Room) {
      return res.status(400).send({
        message: "No Room Found",
      });
    } else {
      try {
        let query = [{}];
      } catch (error) {}
    }
  });
});

export default RoomCommentController;
