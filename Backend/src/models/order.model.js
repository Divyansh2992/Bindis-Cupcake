import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    items: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: 1
        },
        price: {
            type: Number,
            required: true
        }
    }],
    totalAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["PENDING", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"],
        default: "PENDING"
    },
    paymentStatus: {
        type: String,
        enum: ["PENDING", "COMPLETED", "FAILED"],
        default: "PENDING"
    },
    paymentMethod: {
        type: String,
        enum: ["Online", "Offline"],
        default: "Online",
        required: true
    }
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);
export default Order;
