import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import dbConnect from "../config/db.config";
import authRouter from "./routes/authRouter";
import path from "path";
import cloudinaryConnect from "../config/cloudinary.config";
import myHotelRouter from "./routes/myHotelRouter";

cloudinaryConnect();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

dbConnect();

app.use(express.static(path.join(__dirname, "../../../frontend/dist")));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/my-hotels", myHotelRouter);

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../../frontend/dist/index.html"));
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on PORT 7000");
});

export default app;
