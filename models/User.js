import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

//HASH PASSWORD
/*Avoid using arrow function on object prototype because
arrow binds the context lexically with the window object.
thus returning undefined */
UserSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next;
  bcrypt.genSalt(10, function (e, salt) {
    if (e) throw next(e);
    bcrypt.hash(user.password, salt, function (e, hash) {
      if (e) throw next(e);
      user.password = hash;
      next();
    });
  });
});
//COMPARE USER PASSWORD ENTERED TO HASHED PASSWORD
UserSchema.methods.comparePassword = function (userPassword, cb) {
  bcrypt.compare(userPassword, this.password, function (e, isMatch) {
    if (e) return cb(e);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model("user", UserSchema);
