// middlewares/errorMiddleware 
import errorHandler from '../utils/errorHandler.js';

export const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
   if(err.name === "CastError"){
    res.status(statusCode).json({
      status: 'error',
      statusCode,
      message: "cast error"
    });
   }
   if(err.code === 11000){
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    return res.status(statusCode).json({
      status: 'error',
      statusCode,
      message
    });
}
if(err.name === "JsonWebTokenError"){
  const message = "Json Web Token is invalid. Try Again!!!";
  return res.status(statusCode).json({
    status: 'error',
    statusCode,
    message
  });
}
if(err.name === "TokenExpiredError"){
  const message = "Json Web Token is expired. Try Again!!!";
  return res.status(statusCode).json({
    status: 'error',
    statusCode,
    message
  });}
  if(err.name === "ValidationError"){
    const message = Object.values(err.errors).map(value => value.message);
    return res.status(statusCode).json({
      status: 'error',
      statusCode,
      message
    });
  }
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
  });
};
