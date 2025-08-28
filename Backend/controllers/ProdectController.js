import Product from "../models/ProductModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import asyncTryCatch from "../utils/asyncTryCatch.js";
import websiteFeatures from "../utils/feature.js";

// create product --- api/v1/api/product/new for admin only
export const AddProduct = asyncTryCatch(async (req, res, next) => {
  req.body.user = req.user.id;
  const {
    name,
    description,
    price,
    stock,
    rating,
    images,
    category,
    reviews,
    numOfReviews,
    user,
  } = req.body;
  const productAddDatabase = await Product.create({
    name,
    description,
    price,
    stock,
    rating,
    images,
    category,
    reviews,
    user,
    numOfReviews,
  });
  res.status(201).json({
    success: true,
    message: "Product added successfully",
    productAddDatabase,
  });
});
// get all products --- api/v1/api/product for all users
export const GetAllProducts = asyncTryCatch(async (req, res, next) => {
  const resPerPage = 4;
  const productCount = await Product.countDocuments();
  const search = new websiteFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resPerPage);
  const products = await search.query;
  res.status(200).json({
    success: true,
    message: "All products",
    products,
    productCount,
  });
});
// Update Product --- api/v1/api/product/:id for admin only
export const UpdateProduct = asyncTryCatch(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) return next(new ErrorHandler("Product not found", 404));
  const UpdatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    success: true,
    message: "Product updated successfully",
    UpdatedProduct,
  });
});

// delete product --- api/v1/api/product/:id for admin only
export const deleteProduct = asyncTryCatch(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  await Product.deleteOne();
  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
});
// Single Product all details --- api/v1/api/product/:id for all users`
export const ProductSigleProductDetails = asyncTryCatch(
  async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }
    res.status(200).json({
      success: true,
      message: "Product details",
      product,
    });
  }
);

// Add Review and update --- api/v1/product/review for all users

// this route some problem solver later 

export const addReview = asyncTryCatch(async (req, res, next) => {
  const { rating, comment, productId } = req.body;
  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };
  const product = await Product.findById(productId);
  const isReviewed = product.reviews.find(
    (r) => r.user === req.user._id
  );
  if (isReviewed) {
    product.reviews.forEach((review) => {
      if (review.user.toString() === req.user._id.toString()) {
        review.comment = comment;
        review.rating = rating;
      }
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }
  let avg = 0;
    product.reviews.forEach((review) => {
        avg += review.rating;
    });
    product.rating = avg / product.reviews.length;
  await product.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
    message: "Review added successfully",
  });
});

// Get all reviews --- api/v1/product/review for all users
export const getAllReviews = asyncTryCatch(async (req, res, next) => {
    const product = await Product.findById(req.query.id);
    res.status(200).json({
        success: true,
        message: "All reviews",
        reviews: product.reviews,
    });
    });

// Delete reviews -- api/v1/product/review for login user and delete own review
export const  deleteReview = asyncTryCatch(async (req ,res , next)=>{
    const product = await Product.findById(req.query.id);
    const isReviewed = product.reviews.find(
        (r) => {
            console.log(r.user.toString())
            r.user.toString() === req.user._id.toString()}
      );

      if(!isReviewed){
          return next(new ErrorHandler("Review not found" , 404));
      }
      console.log(req.user._id.toString())
        const reviews = product.reviews.filter(
            (r) => r.user !== req.user._id
          );
        //   console.log(reviews)
          let avg = 0;
          reviews.forEach((review) => {
              avg += review.rating;
          });
          const numOfReviews = reviews.length;
          product.reviews = reviews;
          product.numOfReviews = numOfReviews;
          product.rating = avg / reviews.length;
          await product.save({ validateBeforeSave: false });
          res.status(200).json({
              success:true,
              message:"Review deleted successfully"
          })

})