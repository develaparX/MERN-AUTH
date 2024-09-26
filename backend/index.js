import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import { connectDB } from "./db/connectDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //allows us to parse incoming requests:req.body
app.use(cookieParser()); // allows us to parse incoming cookies

app.get("/", (req, res) => {
  res.send("Hello World! 2");
});

app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port:", PORT);
});
