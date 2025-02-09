import express from 'express'
import { addProduct, deleteProduct, getAllProducts, getProduct, updateProduct, addReview, removeReview } from '../controllers/product.controller.js'
import { userAuth } from '../middlewares/auth.middleware.js'

const productRoute = express.Router()

productRoute.post('/add', userAuth, addProduct)
productRoute.get('/get/:id', userAuth, getProduct)
productRoute.get('/get', userAuth, getAllProducts)
productRoute.delete('/delete/:id', userAuth, deleteProduct)
productRoute.put('/update/:id', userAuth, updateProduct)

productRoute.post('/:id/review', userAuth, addReview)
productRoute.delete('/:productId/review/:reviewId', userAuth, removeReview)

export default productRoute