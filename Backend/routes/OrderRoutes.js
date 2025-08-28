import express from "express";
import {
    newOrder,
    getSingleOrder,
    myOrders,
    getAllOrders,
    updateOrder,
    deleteOrder,
} from "../controllers/OrderController.js";
import cookieCheck, { authorizeRoles } from "../middlewares/cookieCheck.js";

const router = express.Router();

router.route("/order/new").post(cookieCheck, newOrder);

router.route("/order/:id").get(cookieCheck, getSingleOrder);

router.route("/orders/me").get(cookieCheck, myOrders);

router
    .route("/admin/orders")
    .get(cookieCheck, authorizeRoles("admin"), getAllOrders);

router
    .route("/admin/order/:id")
    .put(cookieCheck, authorizeRoles("admin"), updateOrder)
    .delete(cookieCheck, authorizeRoles("admin"), deleteOrder);

export default router;
