# Backend eCommerce API Routes

## Products

### Get All Products
- Route: `GET /products`
- Controller: `GetAllProducts`

### Add New Product (Admin)
- Route: `POST /admin/product/new`
- Middleware:
  - `cookieCheck`
  - `isAutherizedByAdmin("admin")`
- Controller: `AddProduct`

### Update Product (Admin)
- Route: `PUT /admin/product/:id`
- Middleware:
  - `cookieCheck`
  - `isAutherizedByAdmin("admin")`
- Controller: `UpdateProduct`

### Delete Product (Admin)
- Route: `DELETE /admin/product/:id`
- Middleware:
  - `cookieCheck`
  - `isAutherizedByAdmin("admin")`
- Controller: `deleteProduct`

## Product Reviews

### Add or Update Review (User)
- Route: `PUT /user/product/review`
- Middleware: `cookieCheck`
- Controller: `addReview`

### Get All Reviews (User)
- Route: `GET /user/product/review`
- Controller: `getAllReviews`

### Delete Review (User)
- Route: `DELETE /user/product/review`
- Middleware: `cookieCheck`
- Controller: `deleteReview`

## Single Product Details

### Get Single Product Details
- Route: `GET /product/:id`
- Controller: `ProductSigleProductDetails`

# User Routes

## User Registration
- Route: `POST /register`
- Controller: `registerUser`

## User Login
- Route: `POST /login`
- Controller: `loginUser`

## Get All Users (Admin)
- Route: `GET /admin/users`
- Middleware:
  - `cookieCheck`
  - `isAutherizedByAdmin("admin")`
- Controller: `allUsers`

## User Logout
- Route: `GET /logout`
- Controller: `logoutUser`

## Reset Password
- Route: `POST /resetpassword`
- Controller: `resetPassword`

## Update Password
- Route: `PUT /resetpassword/:token`
- Controller: `passwordUpdate`

## Get User Profile
- Route: `GET /user/profile`
- Middleware: `cookieCheck`
- Controller: `userProfile`

## Update User Password
- Route: `PUT /user/password`
- Middleware: `cookieCheck`
- Controller: `updatePassword`

## Update User Profile
- Route: `PUT /user/Update`
- Middleware: `cookieCheck`
- Controller: `updateUserProfile`

## Get, Update, or Delete Single User (Admin)
- Route: `GET /admin/user/:id`
- Middleware:
  - `cookieCheck`
  - `isAutherizedByAdmin("admin")`
- Controller (Get): `SingleUser`
- Controller (Delete): `deleteUser`
- Controller (Update Role): `roleUpdate`

