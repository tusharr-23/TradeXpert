const { Schema } = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Your name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Your email address is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    username: {
      type: String,
      required: [true, "Your username is required"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Your password is required"],
      minlength: [8, "Password must be at least 8 characters"],
    },
  },
  {
    timestamps: true,
  },
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

module.exports = { UserSchema };
