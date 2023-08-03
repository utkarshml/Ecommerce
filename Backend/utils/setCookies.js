// Set Cookies and send response
const SetCookies = async (user, res, statusCode) => {
  const token = user.getJWToken();
  /// cookies options
  const options = {
    httpOnly: true,
    maxAge: 
     new Date ( Date.now() + process.env.COOKIES_EXPIRE * 24 * 60 * 60 * 1000),
     minAge: 0,
  };
  res.status(statusCode).cookie("token", token , options).json({
    user,
    statusCode,
    token,
  });
};
export default SetCookies;
