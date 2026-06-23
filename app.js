import express from "express";
import cors from "cors";
import commonRoute from "./src/routes/commonRoute.js";

const app = express();
app.use(express.json());
app.use("/huddle",commonRoute);
app.get("/", (req, res) => {
  res.send("Backend server running successfully");
});

export default app;
