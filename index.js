//Dependencies
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
dotenv.config();
//Objects
import connectDB from "./config/db.js";

//Initiate app
connectDB();
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.join({ message: "API running on PORT 4000" });
});
app.listen(PORT, (req, res) => {
  console.log(`Server started on PORT ${PORT}`);
});
