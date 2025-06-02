import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import { connectToSocket } from "./controllers/socketManager.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);
// console.log(io);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

const start = async () => {
    const connectDb = await mongoose.connect(
        "mongodb+srv://zoomkishan:KishanChauhan2006.25@cluster0.oljs7mv.mongodb.net/"
    );

    console.log(connectDb.connection.host);
    server.listen(app.get("port"), () => {
        console.log("Listening on port 8000");
    });
};

start();
