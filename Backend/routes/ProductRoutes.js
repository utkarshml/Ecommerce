import express from "express"
import {GetAllProducts , AddProduct , UpdateProduct , deleteProduct, ProductSigleProductDetails} from "../controllers/ProdectController.js"
const Router = express.Router(); 




Router.get("/products", GetAllProducts)
Router.post("/product/new",AddProduct)
Router.route("/product/:id").put(UpdateProduct).delete(deleteProduct).get(ProductSigleProductDetails)

export default Router;