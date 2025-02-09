# Bindi's Cupcake Backend API Documentation

## User Endpoints

### Authentication

#### POST /api/users/signup
Create a new user account.
```json
{
  "mobile_number": "1234567890",
  "password": "yourpassword",
  "username": "username"
}
```

#### POST /api/users/login
Authenticate existing user.
```json
{
  "mobile_number": "1234567890",
  "password": "yourpassword"
}
```

#### GET /api/users/auth
Verify authentication status.
- Requires: Authentication token in cookie

### User Management

#### GET /api/users/get
Get all users (Admin only).
- Requires: Admin authentication

#### PUT /api/users/address
Update user's address.
```json
{
  "address": "New address"
}
```
- Requires: Authentication token

## Product Endpoints

### Product Management

#### POST /api/products/add
Create new product.
```json
{
  "productName": "Product Name",
  "Img": "image_url",
  "description": "Product description",
  "category": "category_id",
  "price": 99.99,
  "details": {
    "weight": 500,
    "dimentions": {
      "l": 10,
      "b": 10,
      "h": 10
    },
    "ingredients": "List of ingredients",
    "allergens": "List of allergens"
  }
}
```

#### GET /api/products/get
Get all products.

#### GET /api/products/get/:id
Get specific product by ID.

#### PUT /api/products/update/:id
Update product details.
- Requires: Product ID in URL
- Body: Any valid product fields

#### DELETE /api/products/delete/:id
Delete a product.
- Requires: Product ID in URL

### Product Reviews

#### POST /api/products/:id/review
Add product review.
```json
{
  "review": "Review text",
  "rate": 5
}
```
- Rate must be between 1-5
- Requires: Authentication

#### DELETE /api/products/:productId/review/:reviewId
Remove product review.
- Requires: Product ID and Review ID
- Users can only delete their own reviews

## Order Endpoints

### POST /api/orders/create
Create a new order from cart items.

## Authentication Details
- JWT-based authentication
- Tokens stored in HTTP-only cookies
- Secure cookie settings for XSS protection
- Role-based access (Admin/User)

## Models

### User Model
```json
{
  "mobile_number": "String (required)",
  "username": "String (required)",
  "password": "String (required, hashed)",
  "DOB": "Date",
  "address": "String",
  "role": "String (enum: Admin/User)"
}
```

### Product Model
```json
{
  "productName": "String (required)",
  "Img": "String (required)",
  "description": "String",
  "category": "String (ref: category)",
  "price": "Number (required)",
  "rating": "Number",
  "details": {
    "weight": "Number",
    "dimentions": {
      "l": "Number",
      "b": "Number",
      "h": "Number"
    },
    "ingredients": "String",
    "allergens": "String"
  },
  "reviews": [{
    "userId": "ObjectId",
    "review": "String",
    "rate": "Number (1-5)",
    "likes": "Number",
    "dislikes": "Number",
    "postedAt": "Date"
  }]
}
