import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import { connectToSocket } from "./controllers/socketManager.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env",
});

const app = express();
const server = createServer(app);
const io = connectToSocket(server);
// console.log(io);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

const start = async () => {
    const connectDb = await mongoose.connect(process.env.MONGOURI);

    console.log(connectDb.connection.host);
    server.listen(app.get("port"), () => {
        console.log("Listening on port 8000");
    });
};

start();
