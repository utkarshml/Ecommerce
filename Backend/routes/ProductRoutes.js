import express from "express";
import {
  GetAllProducts,
  AddProduct,
  UpdateProduct,
  deleteProduct,
  ProductSigleProductDetails,
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
Router.route("admin/product/:id")
  .put(cookieCheck, isAutherizedByAdmin("admin"), UpdateProduct)
  .delete(cookieCheck, isAutherizedByAdmin("admin"), deleteProduct);

Router.get("/product/:id", ProductSigleProductDetails);
export default Router;
