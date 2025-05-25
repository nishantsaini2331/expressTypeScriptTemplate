import express from "express";
import { Express } from "express";
const app: Express = express();

const PORT: Number = 3000;

app.get("/ping", (req, res) => {
  res.send("Pong");
});

app.listen(PORT, () => {
  console.log("Server started");
});
