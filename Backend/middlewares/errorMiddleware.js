// middlewares/errorMiddleware.js
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
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
  });
};
