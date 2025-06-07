import express from "express";
import { createServer } from "node:http";
import mongoose from "mongoose";
import cors from "cors";
import { connectToSocket } from "./controllers/socketManager.js";
import cookieParser from "cookie-parser";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);
// console.log(io);

app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));
app.use(cookieParser());

//routes declaration
import userRouter from "./routes/user.route.js";

app.use("/api/v1/user", userRouter);

export { server };
