import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
const app = express();

const PORT = 8000;
import path from "path";

const __dirname = path.resolve();
console.log(__dirname);

// connect mongoDb

import { mongoConnect } from "./src/config/mongoDb.js";

mongoConnect();

// middleware
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + "/build"));

//api endpoints
import taskRouter from "./src/routers/taskRouters.js";
app.use("/api/v1/task", taskRouter);

app.use("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

console.log(process.env);

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "server running as normal",
  });
});

// server listening the port
app.listen(PORT, (error) => {
  error && console.log(error.message);

  console.log(`
  server running at http://localhost:${PORT}
  `);
});
