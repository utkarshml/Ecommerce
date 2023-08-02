import express from 'express';
import dotenv from "dotenv";
import path from 'path';
import ProductRoutes from "./routes/ProductRoutes.js"
import UserRoutes from "./routes/UserRoutes.js"
import cookiesParser from 'cookie-parser';
import database from './config/database.js';
import ErrorHandler  from './utils/errorHandler.js';     

const configPath = path.join(path.resolve(), "/Backend/config/config.env");

dotenv.config({
    path: configPath
});
export const app = express();
import { errorMiddleware } from './middlewares/errorMiddleware.js';
database();
app.use(cookiesParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/v1/api", ProductRoutes);
app.use("/v1/api", UserRoutes);
// Error Middleware
app.use((req, res, next) => {
 next(new ErrorHandler(`${req.originalUrl} route not found`, 404))
})
app.use(errorMiddleware);
