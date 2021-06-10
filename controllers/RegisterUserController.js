import { User } from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

exports.postRegisterUser = async (req, res) => {
  try {
    //USE EMAIL TO CHECK IF USER ALREADY EXISTS
    const user = User.findOne({ email: req.body.email });
    if (user) res.json({ msg: "Email address exists already" });
    else {
      const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      return res.json({
        msg: "Account created",
        user: newUser,
      });
    }
  } catch (e) {
    return res.json({
      msg: e.Message,
    });
  }
};
