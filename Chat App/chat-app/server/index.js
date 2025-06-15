import express from "express";
import {WebSocketServer} from"ws";
import { Server } from "socket.io";
import cors from "cors";
const app = express();
const port = 8989;

const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    }
);
const wss = new WebSocketServer({ server });
const io = new Server(server, {
  cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] }
});

app.use(cors());
app.use(express.json());

const users = {};

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("join", ({ username }) => {
    users[socket.id] = username;
    io.emit("userList", Object.values(users));
    io.emit("notify", `${username} joined`);
  });

  socket.on("sendMessage", (data) => {
    io.emit("receiveMessage", data);
  });

  socket.on("sendFile", (data) => {
    io.emit("receiveFile", data);
  });

  socket.on("disconnect", () => {
    const username = users[socket.id];
    delete users[socket.id];
    io.emit("userList", Object.values(users));
    io.emit("notify", `${username} left`);
    console.log("User disconnected", socket.id);
  });
});
