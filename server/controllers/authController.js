import User from "../models/User.js";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { verifyToken, verifyTokenAdmin } from "../middlewares/verifyToken.js";

const authController = express.Router();

// register

authController.post("/register", async (req, res) => {
  try {
    const isExisting = await User.findOne({ email: req.body.email });
    if (isExisting) {
      return res.status(404).json({ msg: "User already registered" });
    }

    if (
      req.body.username === "" ||
      req.body.email === "" ||
      req.body.password === "" ||
      req.body.img === ""
    ) {
      return res.status(500).json({ msg: "All fields must be populated" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = await User.create({ ...req.body, password: hashedPassword });
    await user.save();

    const { password, ...others } = user._doc;
    console.log(others);
    const token = createToken(user);
    console.log(token);

    return res.status(201).json({ others, token });
  } catch (error) {
    return res.status(500).json(error);
  }
});
// Login

authController.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (email === "" || password === "") {
    return res.status(500).json({ msg: "All fields must be populated" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "Invalid credentials" });
    }
    const comparePass = await bcrypt.compare(req.body.password, user.password);
    if (!comparePass) {
      return res.status(404).json({ msg: "Invalid credentials" });
    }

    const { password, ...others } = user._doc;
    const token = createToken(user);

    return res.status(200).json({ others, token });
  } catch (error) {
    return res.status(500).json(error);
  }
});

// create token function

const createToken = (user) => {
  const payload = {
    id: user._id.toString(),
    isAdmin: user.isAdmin,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
};

export default authController;
