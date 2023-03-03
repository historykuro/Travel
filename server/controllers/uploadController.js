import express from "express";
import multer from "multer";
import { verifyToken } from "../middlewares/verifyToken.js";

const uploadController = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.filename);
  },
});
const upload = multer({
  storage: storage,
});

uploadController.post("/image", upload.single("image"), async (req, res) => {
  try {
    return res.status(200).json("File upload successfully");
  } catch (error) {
    console.error(error);
  }
});

export default uploadController;
