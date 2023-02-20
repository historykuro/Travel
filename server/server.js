import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authController from "./controllers/authController.js";
import roomController from "./controllers/roomController.js";
import uploadController from "./controllers/uploadController.js";
dotenv.config();

const app = express();

//connect db
const PORT = process.env.PORT || 3200;

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((err) => console.log(`${err} did not connect`));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.json({ message: "Connected to nodejs success" });
});

app.use("/images", express.static("public/images"));
app.use("/auth", authController);
app.use("/room", roomController);
app.use("/upload", uploadController);

//start our server 6000
