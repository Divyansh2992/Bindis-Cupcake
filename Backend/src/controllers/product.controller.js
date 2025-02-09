import Product from "../models/product.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const addProduct = asyncHandler(async (req, res) => {
    const { productName, Img, description, category, price, details } = req.body;

    if (!productName || !Img || !price) {
        throw new ApiError(400, "All fields are required");
    }

    const product = await Product.create({
        productName,
        Img,
        description,
        category,
        price,
        details
    });

    return res.status(201).json(
        new ApiResponse(200, product, "Product created successfully")
    );
});

const getAllProducts = asyncHandler(async (req, res) => {
    const products = await Product.find();
    return res.status(200).json(
        new ApiResponse(200, products, "Products fetched successfully")
    );
});

const getProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    
    if (!product) {
        throw new ApiError(404, "Product not found");
    }

    return res.status(200).json(
        new ApiResponse(200, product, "Product fetched successfully")
    );
});

const updateProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
    );

    if (!product) {
        throw new ApiError(404, "Product not found");
    }

    return res.status(200).json(
        new ApiResponse(200, product, "Product updated successfully")
    );
});

const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
        throw new ApiError(404, "Product not found");
    }

    return res.status(200).json(
        new ApiResponse(200, {}, "Product deleted successfully")
    );
});

const addReview = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { review, rate } = req.body;
    const userId = req.user._id;

    const product = await Product.findById(id);
    
    if (!product) {
        throw new ApiError(404, "Product not found");
    }

    const newReview = {
        userId,
        review,
        rate
    };

    product.reviews.push(newReview);
    await product.save();

    // Update product rating
    const avgRating = product.reviews.reduce((acc, rev) => acc + rev.rate, 0) / product.reviews.length;
    product.rating = avgRating;
    await product.save();

    return res.status(200).json(
        new ApiResponse(200, product, "Review added successfully")
    );
});

const removeReview = asyncHandler(async (req, res) => {
    const { productId, reviewId } = req.params;
    const userId = req.user._id;

    const product = await Product.findById(productId);
    
    if (!product) {
        throw new ApiError(404, "Product not found");
    }

    const reviewIndex = product.reviews.findIndex(
        (review) => review._id.toString() === reviewId && review.userId.toString() === userId.toString()
    );

    if (reviewIndex === -1) {
        throw new ApiError(404, "Review not found or unauthorized");
    }

    product.reviews.splice(reviewIndex, 1);
    
    // Update product rating
    const avgRating = product.reviews.length ? 
        product.reviews.reduce((acc, rev) => acc + rev.rate, 0) / product.reviews.length : 0;
    product.rating = avgRating;
    
    await product.save();

    return res.status(200).json(
        new ApiResponse(200, product, "Review removed successfully")
    );
});

export {
    addProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    addReview,
    removeReview
}
