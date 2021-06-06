require("dotenv").config();
const mongoose = require("mongoose");
async function connectDB() {
  const connection = await mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  });
  if (connection) console.log("DB connection success");
  else console.log("Error");
}
module.exports = connectDB;
