import asyncTryCatch from "../utils/asyncTryCatch.js";
import User from "../models/UserModel.js";

// get all users --- api/v1/api/user for admin only
export const allUsers = asyncTryCatch(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    success: true,
    message: "All users",
    users,
  });
});
// register user --- api/v1/api/user/register for all users
export const registerUser = asyncTryCatch(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is a sample id",
      url: "this is a sample url",
    },
  });
  const token = user.methods.JWToken();
  res.status(201).json({
    success: true,
    message: "User registered successfully",
    user,
    token: token,
  });
});

// login user --- api/v1/api/user/login for all users
export const loginUser = asyncTryCatch(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please provide email and password",
    });
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "Invalid credentials",
    });
  }
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return res.status(404).json({
      success: false,
      message: "Invalid credentials",
    });
  }
  const token = user.methods.JWToken();
  res
    .status(200)

    .json({
      success: true,
      message: "User logged in successfully",
      token: token,
    });
});
