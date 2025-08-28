import express from "express";
import {
  GetAllProducts,
  AddProduct,
  UpdateProduct,
  deleteProduct,
  addReview,
  getSingleProductDetails,
  getAllReviews,
  deleteReview,
} from "../controllers/ProductController.js";
import cookieCheck, {
  authorizeRoles,
} from "../middlewares/cookieCheck.js";
const Router = express.Router();

Router.get("/products", GetAllProducts);
Router.post(
  "/admin/product/new",
  cookieCheck,
  authorizeRoles("admin"),
  AddProduct
);
Router.route("/admin/product/:id")
  .put(cookieCheck, authorizeRoles("admin"), UpdateProduct)
  .delete(cookieCheck, authorizeRoles("admin"), deleteProduct);
Router.route("/user/product/review")
  .put(cookieCheck, addReview)
  .get(getAllReviews)
  .delete(cookieCheck, deleteReview);
Router.get("/product/:id", getSingleProductDetails);
export default Router;
