import Order from "../models/order.model.js";
import Cart from "../models/cart.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const createOrder = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    const { paymentMethod } = req.body;

    // Get user's cart
    const cart = await Cart.findOne({ userId }).populate("items.productId");
    if (!cart || cart.items.length === 0) {
        throw new ApiError(400, "Cart is empty");
    }

    // Calculate total amount and prepare order items
    const orderItems = cart.items.map(item => ({
        productId: item.productId._id,
        quantity: item.quantity,
        price: item.productId.price
    }));

    const totalAmount = orderItems.reduce(
        (sum, item) => sum + (item.price * item.quantity), 0
    );

    // Create order
    const order = await Order.create({
        userId,
        items: orderItems,
        totalAmount,
        paymentMethod
    });

    // Clear cart after order creation
    await Cart.findOneAndDelete({ userId });

    return res.status(201).json(
        new ApiResponse(201, order, "Order created successfully")
    );
});

const getUserOrders = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    const orders = await Order.find({ userId })
        .populate("items.productId")
        .sort({ createdAt: -1 });

    return res.status(200).json(
        new ApiResponse(200, orders, "Orders fetched successfully")
    );
});

const getOrderById = asyncHandler(async (req, res) => {
    const { orderId } = req.params;
    const userId = req.user._id;

    const order = await Order.findOne({ _id: orderId, userId })
        .populate("items.productId");

    if (!order) {
        throw new ApiError(404, "Order not found");
    }

    return res.status(200).json(
        new ApiResponse(200, order, "Order fetched successfully")
    );
});

const updateOrderStatus = asyncHandler(async (req, res) => {
    const { orderId } = req.params;
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(
        orderId,
        { status },
        { new: true }
    );

    if (!order) {
        throw new ApiError(404, "Order not found");
    }

    return res.status(200).json(
        new ApiResponse(200, order, "Order status updated successfully")
    );
});

const cancelOrder = asyncHandler(async (req, res) => {
    const { orderId } = req.params;
    const userId = req.user._id;

    const order = await Order.findOne({ _id: orderId, userId });
    
    if (!order) {
        throw new ApiError(404, "Order not found");
    }

    if (order.status !== "PENDING") {
        throw new ApiError(400, "Cannot cancel order at this stage");
    }

    order.status = "CANCELLED";
    await order.save();

    return res.status(200).json(
        new ApiResponse(200, order, "Order cancelled successfully")
    );
});

export {
    createOrder,
    getUserOrders,
    getOrderById,
    updateOrderStatus,
    cancelOrder
};
