import express from "express";
import {
  GetAllProducts,
  AddProduct,
  UpdateProduct,
  deleteProduct,
  addReview,
  ProductSigleProductDetails,
  getAllReviews,
  deleteReview,
} from "../controllers/ProdectController.js";
import cookieCheck, {
  isAutherizedByAdmin,
} from "../middlewares/cookieCheck.js";
const Router = express.Router();

Router.get("/products", GetAllProducts);
Router.post(
  "/admin/product/new",
  cookieCheck,
  isAutherizedByAdmin("admin"),
  AddProduct
);
Router.route("/admin/product/:id")
  .put(cookieCheck, isAutherizedByAdmin("admin"), UpdateProduct)
  .delete(cookieCheck, isAutherizedByAdmin("admin"), deleteProduct);
Router.route("/user/product/review")
  .put(cookieCheck, addReview)
  .get(getAllReviews)
  .delete(cookieCheck, deleteReview);
Router.get("/product/:id", ProductSigleProductDetails);
export default Router;
