import express from "express";
import { userAuth } from "../middlewares/auth.middleware.js";
import {
    createOrder,
    getUserOrders,
    getOrderById,
    updateOrderStatus,
    cancelOrder
} from "../controllers/order.controller.js";

const router = express.Router();

router.post("/create", userAuth, createOrder);
router.get("/get", userAuth, getUserOrders);
router.get("/get/:orderId", userAuth, getOrderById);
router.patch("/update/:orderId", userAuth, updateOrderStatus);
router.patch("/cancel/:orderId", userAuth, cancelOrder);

export default router;
