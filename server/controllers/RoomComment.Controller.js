// import Comment from "../models/Comment.js";
// import Room from "../models/Room.js";

// import { verifyToken, verifyTokenAdmin } from "../middlewares/verifyToken.js";
// import express from "express";
// import mongoose, { mongo } from "mongoose";

// const RoomComment = express.Router();

// // get List

// RoomComment.get("/:room_id/comments", async (req, res) => {
//   let room_id = req.params.room_id;
//   if (!mongoose.Types.ObjectId.isValid(room_id)) {
//     return res.status(400).send({
//       message: "Invalid Room id",
//       data: {},
//     });
//   }
//   Room.findOne({ _id: room_id }).then(async (room) => {
//     if (!room) {
//       return res.status(400).send({
//         message: "No Room found",
//         data: {},
//       });
//     } else {
//       try {
//         let query = [
//           {
//             $lookup: {
//               from: "users",
//               localField: "user_id",
//               foreignField: "_id",
//               as: "user",
//             },
//           },
//           { $unwind: "$user" },
//           {
//             $match: {
//               room_id: mongoose.Types.ObjectId(room_id),
//             },
//           },
//           {
//             $sort: {
//               createdAt: -1,
//             },
//           },
//         ];

//         let total = await Comment.countDocuments(query);
//         let page = req.query.page ? parseInt(req.query.page) : 1;
//         let perPage = req.query.perPage ? parseInt(req.query.perPage) : 10;
//         let skip = (page - 1) * perPage;
//         query.push({
//           $skip: skip,
//         });
//         query.push({
//           $limit: perPage,
//         });

//         let comments = await Comment.aggregate(query);
//         return res.send({
//           message: "Comment successfully fetch",
//           data: {
//             comments: comments,
//             meta: {
//               total: total,
//               currentPage: page,
//               perPage: perPage,
//               totalPages: Math.ceil(total / perPage),
//             },
//           },
//         });
//       } catch (err) {
//         return res.status(400).send({
//           message: err.message,
//           data: err,
//         });
//       }
//     }
//   });
// });

// // create
// RoomComment.post("/room_id/comments/create", verifyToken, async (req, res) => {
//   let room_id = req.params.room_id;
//   if (!mongoose.Types.ObjectId.isValid(room_id)) {
//     return res.status(400).send({
//       message: "Invalid blog id",
//       data: {},
//     });
//   }

//   Room.findOne({ _id: room_id }).then(async (room) => {
//     if(!room){
//         return res.status(400).send({
//           message: "No blog found",
//           data: {},
//         });
//     }else{
//         try {

//         } catch (error) {

//         }
//     }
//   });
// });

// export default RoomComment;
