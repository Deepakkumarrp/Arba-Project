const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    email: {
        type: String,
        unique:true,
        required: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
        type: String,
        enum: ["admin" , "user"],
        default: "user"
    }
  },
  {
    versionKey: false,
  }
);

const User = new mongoose.model("User", userSchema);

module.exports = {
  User,
};
