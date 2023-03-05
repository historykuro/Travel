import Room from "../models/Room.js";
import { verifyToken, verifyTokenAdmin } from "../middlewares/verifyToken.js";
import express from "express";
import Comment from "../models/Comment.js";
import cloudinary from "../ultis/cloudinary.js";

const roomController = express.Router();
// get all
roomController.get("/", async (req, res) => {
  const type = req.query.type;

  let rooms;
  try {
    if (type) {
      rooms = await Room.find({ type: type }).limit(30);
      console.log(rooms);
    } else {
      rooms = await Room.find({}).limit(30);
    }
    return res.status(200).json(rooms);
  } catch (error) {
    console.error(error.message);
  }
});

// get limit
roomController.get("/limit", async (req, res) => {
  const type = req.query.type;

  let rooms;
  try {
    if (type) {
      rooms = await Room.find({ type: type }).sort({ _id: -1 }).limit(5);
    } else {
      rooms = await Room.find({}).sort({ _id: -1 }).limit(5);
    }
    return res.status(200).json(rooms);
  } catch (error) {
    console.error(error.message);
  }
});

// get types and their corresponding numbers
roomController.get("/find/types", async (req, res) => {
  try {
    const apartment = await Room.find({ type: "apartment" }).countDocuments();
    const villa = await Room.find({ type: "villa" }).countDocuments();
    const penthouse = await Room.find({ type: "penthouse" }).countDocuments();
    const bungalow = await Room.find({ type: "bungalow" }).countDocuments();

    return res.status(200).json({ apartment, villa, penthouse, bungalow });
  } catch (error) {
    console.error(error.message);
  }
});

// pagination
// roomController.get("/:page", async (req, res) => {
//   let perPage = 4; // số lượng sản phẩm xuất hiện trên 1 page
//   let page = req.params.page || 1;
//   try {
//     Room.find() // find tất cả các data
//       .skip(perPage * page - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
//       .limit(perPage)
//       .exec((err, room) => {
//         Room.countDocuments((err, count) => {
//           // đếm để tính có bao nhiêu trang
//           if (err) return next(err);
//           res.send(room); // Trả về dữ liệu các sản phẩm theo định dạng như JSON, XML,...
//         });
//       });
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// get
roomController.get("/find/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const rooms = await Room.findById(id);
    return res.status(200).json(rooms);
  } catch (error) {
    console.error(error.message);
  }
});

// create
roomController.post("/", verifyToken, async (req, res) => {
  const { title, desc, price, country, photo, type, review } = req.body;
  try {
    const result = await cloudinary.uploader.upload(photo, {
      folder: "products",
    });
    const createdRoom = await Room.create({
      title,
      desc,
      price,
      country,
      photo: {
        public_id: result.public_id,
        url: result.secure_url,
      },
      type,
      review,
    });

    return res.status(201).send({ message: createdRoom });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// update
roomController.put("/:id", async (req, res) => {
  const { photo, ...items } = req.body;
  try {
    const result = await cloudinary.uploader.upload(photo, {
      folder: "products",
    });
    const room = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          photo: {
            public_id: result.public_id,
            url: result.secure_url,
          },
          ...items,
        },
      },
      { new: true }
    );
    return res.status(200).send(room);
  } catch (error) {
    console.error("error Sever", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// delete
roomController.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    return res.status(200).json({ msg: "Room has been deleted successfully" });
  } catch (error) {
    console.error(error.message);
  }
});

// book hotel
// roomController.put("/bookRoom/:id", verifyToken, async (req, res) => {
//   try {
//     const { unavailableDates } = req.body;
//     const room = await Room.findByIdAndUpdate(req.params.id);

//     room.unavailableDates = room.unavailableDates.concat(unavailableDates);
//     await room.save();

//     return res.status(200).json(room);
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// CommentPost

// roomController.post("/:id/comment", verifyToken, async (req, res) => {
//   const id = req.params.id;
//   const { value } = req.body;

//   if (value) {
//     const post = await Room.findById(id);
//     if (!post) return res.send({ message: "id is invalid" });
//     post.comments.push(value);
//     const updatedPost = await Room.findByIdAndUpdate(id, post, { new: true });

//     return res.status(201).json(updatedPost);
//   } else {
//   }
// });
// Get all
roomController.get("/connect", (req, res) => {
  Comment.find()
    .populate("user")
    .sort({ createdAt: -1 })
    .then((comments) => res.json(comments))
    .catch((err) => res.status(400).json("Error" + err));
});

// Filter comment room
roomController.get("/usercomment/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const commentRoom = await Comment.find({ room: id })
      .populate("user")
      .sort({ createdAt: -1 });
    return res.status(200).send(commentRoom);
  } catch (error) {
    console.error(error.message);
  }
});

roomController.get("/findcomment/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const rooms = await Room.findById(id);
    return res.status(200).json(rooms);
  } catch (error) {
    console.error(error.message);
  }
});

// create comment
roomController.post("/:id/comment", verifyToken, async (req, res) => {
  const id = req.params.id;
  const comment = new Comment({
    user: req.body.user,
    text: req.body.text,
    room: id,
  });
  try {
    if (comment.text) {
      const savedComment = await comment.save();
      const savedCommentWithUserData = await Comment.findById(savedComment._id);
      res.send(savedCommentWithUserData);
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

// delete
roomController.delete("/:id/deletecomment", verifyToken, async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .send({ msg: "Comment has been deleted successfully" });
  } catch (error) {
    console.error(error.message);
  }
});

// Update comment
roomController.put("/:id/updateComment", verifyToken, async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json(room);
  } catch (error) {
    console.error(error.message);
  }
});

export default roomController;
