//Dependencies
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();
//Objects
import connectDB from "./config/db.js";

//Initiate app
connectDB();
const app = express();
const PORT = process.env.PORT || 4000;
//Middleware
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.join({ message: "API success" });
});
app.listen(PORT, (req, res) => {
  console.log(`Server started on PORT ${PORT}`);
});
