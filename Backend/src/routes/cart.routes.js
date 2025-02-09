import express from "express";
import { userAuth } from "../middlewares/auth.middleware.js";
import {
    addToCart,
    getCart,
    updateCartItem,
    removeFromCart,
    clearCart
} from "../controllers/cart.controller.js";

const router = express.Router();

// Changed route paths to be more consistent with product routes
router.post('/add', userAuth, addToCart);
router.get('/get/:userId', userAuth, getCart);
router.put('/update', userAuth, updateCartItem);
router.delete('/remove/:productId', userAuth, removeFromCart);
router.delete('/clear', userAuth, clearCart);

export default router;
