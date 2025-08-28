import asyncTryCatch from "../utils/asyncTryCatch.js";
import User from "../models/UserModel.js";
import SetCookies from "../utils/setCookies.js";
import sendEmail from "../utils/sendToken.js";
import ErrorHandler from "../utils/errorHandler.js";
import crypto from "crypto";
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
  SetCookies(user, res, 201);
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
  SetCookies(user, res, 200);
});

// User LOGOUT --- api/v1/api/user/logout for all users and admin
export const logoutUser = asyncTryCatch(async (req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({
    success: true,
    message: "User logged out",
  });
});

// Reset Password --- /v1/api/resetpassword for all users
export const resetPassword = asyncTryCatch(async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return next(new ErrorHandler("Please provide email address", 400));
  }
  const user = await User.findOne({ email });
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }
  const resetToken = await user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });
  try {
    sendEmail({
      to: email,
      subject: "Password Reset",
      text: "Please click the link to reset your password",
      html: `
          <h1>Click the link to reset your password</h1>
          <a href="${req.protocol}//${req.get(
        "host"
      )}/v1/api/resetpassword/${resetToken}">Reset Password</a>
          <p>This link is valid for <strong>30 minutes</strong></p>`,
    });
    res.status(200).json({
      success: true,
      message: `Email sent to ${email}`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new ErrorHandler(error.message, 500));
  }
});

// Reset Password --- /v1/api/resetpassword/:token for all users
export const passwordUpdate = asyncTryCatch(async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
  if (!resetPasswordToken) {
    return next(new ErrorHandler("Invalid token or token has expired", 400));
  }
  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });
  if (!user) {
    return next(new ErrorHandler("Invalid token or token has expired", 400));
  }
  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password does not match", 400));
  }
  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();
  SetCookies(user, res, 200);
});

// get user profile --- /v1/api/user/profile for all users
export const userProfile = asyncTryCatch(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({
    success: true,
    message: "User profile",
    user,
  });
});

// update password --- /v1/api/user/password for all users
export const updatePassword = asyncTryCatch(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");
  const isMatch = await user.matchPassword(req.body.currentPassword);
  if (!isMatch) {
    return next(new ErrorHandler("Password is incorrect", 400));
  }
  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password Not match", 400));
  }
  user.password = req.body.password;
  await user.save();
  SetCookies(user, res, 200);
});

// update user profile --- /v1/api/user/profile for all users
export const updateUserProfile = asyncTryCatch(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (req.body.name) {
    user.name = req.body.name;
  }
  if (req.body.email) {
    user.email = req.body.email;
  }
  if (req.body.avatar) {
    user.avatar = req.body.avatar;
  }
  await user.save();
  res.status(200).json({
    success: true,
    message: "User profile updated",
    user,
  });
});

// get single user --- /v1/api/admin/user/:id for admin only
export const SingleUser = asyncTryCatch(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  res.status(200).json({
    success: true,
    message: "User profile",
    user,
  });
});

// delete single user --- /v1/api/admin/user/:id for admin only
export const deleteUser = asyncTryCatch(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  await user.deleteOne();
  res.status(200).json({
    success: true,
    message: "User deleted",
  });
} );

// Role Update --- /v1/api/admin/user/:id for admin only
export const roleUpdate = asyncTryCatch(async (req, res, next) => {

  const user = await User.findById(req.params.id);
  if(user.role === "admin"){
    user.role = "user"
  }else{
    user.role = "admin"
  }
  await user.save();
  res.status(200).json({
    success: true,
    message: "User role updated",
    user,
  });
} 
);