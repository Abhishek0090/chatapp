const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.listen(PORT, console.log(`Server Started On PORT ${PORT}`));

app.get("/", (req, res) => {
  res.send("Hi bro");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});
