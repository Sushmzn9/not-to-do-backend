import express from "express";
import cors from "cors";
const app = express();

const PORT = 8000;

// connect mongoDb

import { mongoConnect } from "./src/config/mongoDb.js";

mongoConnect();

// middleware
app.use(express.json());
app.use(cors());
//api endpoints
import taskRouter from "./src/routers/taskRouters.js";
app.use("/api/v1/task", taskRouter);

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
