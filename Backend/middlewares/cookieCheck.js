import jwt from "jsonwebtoken";
import asyncTryCatch from "../utils/asyncTryCatch.js";
import User from "../models/UserModel.js";
// Set Cookies and send response
const cookieCheck = asyncTryCatch(async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Please login to access this resource",
    });
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id);
  next();
});

export const isAutherizedByAdmin = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `You are ${req.user.role} so you are not authorized to access this resource`,
      });
    }
    next();
  };
};

export default cookieCheck;
