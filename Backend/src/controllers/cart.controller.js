import Cart from "../models/cart.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const addToCart = asyncHandler(async (req, res) => {
    const userId = req.user._id; // Get userId from authenticated user
    const { productId, quantity } = req.body;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
        cart = new Cart({ userId, items: [] });
    }

    const existingItem = cart.items.find(item => item.productId.toString() === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.items.push({ productId, quantity });
    }

    await cart.save();
    
    return res.status(200).json(
        new ApiResponse(200, cart, "Item added to cart successfully")
    );
});

const getCart = asyncHandler(async (req, res) => {
    const userId = req.user._id; // Get userId from authenticated user

    const cart = await Cart.findOne({ userId }).populate("items.productId");
    
    if (!cart) {
        throw new ApiError(404, "Cart not found");
    }

    return res.status(200).json(
        new ApiResponse(200, cart, "Cart fetched successfully")
    );
});

const updateCartItem = asyncHandler(async (req, res) => {
    const userId = req.user._id; // Get userId from authenticated user
    const { productId, quantity } = req.body;

    const cart = await Cart.findOne({ userId });
    
    if (!cart) {
        throw new ApiError(404, "Cart not found");
    }

    const item = cart.items.find(item => item.productId.toString() === productId);
    
    if (!item) {
        throw new ApiError(404, "Product not in cart");
    }

    item.quantity = quantity;
    await cart.save();

    return res.status(200).json(
        new ApiResponse(200, cart, "Cart item updated successfully")
    );
});

const removeFromCart = asyncHandler(async (req, res) => {
    const userId = req.user._id; // Get userId from authenticated user
    const { productId } = req.params;

    const cart = await Cart.findOne({ userId });
    
    if (!cart) {
        throw new ApiError(404, "Cart not found");
    }

    cart.items = cart.items.filter(item => item.productId.toString() !== productId);
    await cart.save();

    return res.status(200).json(
        new ApiResponse(200, cart, "Item removed from cart successfully")
    );
});

const clearCart = asyncHandler(async (req, res) => {
    const userId = req.user._id; // Get userId from authenticated user

    const cart = await Cart.findOneAndDelete({ userId });
    
    if (!cart) {
        throw new ApiError(404, "Cart not found");
    }

    return res.status(200).json(
        new ApiResponse(200, null, "Cart cleared successfully")
    );
});

export {
    addToCart,
    getCart,
    updateCartItem,
    removeFromCart,
    clearCart
};
