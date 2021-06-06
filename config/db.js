import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://Dev_Chrissy:${process.env.DB_PASSWORD}@node-auth.t5vpg.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      }
    );
    console.log("Status 200: Connection success");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
export default connectDB;
