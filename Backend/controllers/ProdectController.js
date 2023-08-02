
import Product from "../models/ProductModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import asyncTryCatch from "../utils/asyncTryCatch.js";
import websiteFeatures from "../utils/feature.js";


// create product --- api/v1/api/product/new for admin only
export const AddProduct = asyncTryCatch(async (req, res , next) => {
    const { name, description, price,  stock , rating ,images , category  , reviews ,numOfReviews} = req.body;
    const productAddDatabase = await Product.create({
        name,
        description,
        price,
        stock,
        rating,
        images,
        category,
        reviews,
        numOfReviews
    })
    res.status(201)
    .json({
        success:true,
        message:"Product added successfully",
        productAddDatabase
    })
})
// get all products --- api/v1/api/product for all users
export const GetAllProducts = asyncTryCatch(async (req, res ,next) => {
    const resPerPage = 4;
    const productCount = await Product.countDocuments();
  const search =   new websiteFeatures(Product.find() , req.query).search().filter().pagination(resPerPage);
  const products = await search.query;
    res.status(200)
    .json({
        success:true,
        message:"All products",
        products,
        productCount
    })
})
// Update Product --- api/v1/api/product/:id for admin only
export  const UpdateProduct = asyncTryCatch(async (req ,res , next) => {
    const product = await Product.findById(req.params.id);
      if(!product) return next(new ErrorHandler("Product not found", 404))
       const UpdatedProduct = await  Product.findByIdAndUpdate(req.params.id , req.body , {
          new:true,
          runValidators:true,
        })
          res.status(200).json({
              success:true,
              message:"Product updated successfully",
              UpdatedProduct
          })
  })


// delete product --- api/v1/api/product/:id for admin only
export const deleteProduct = asyncTryCatch(async (req , res , next) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        return  next(new ErrorHandler("Product not found", 404))

      }
      await Product.deleteOne();
      res.status(200).json({
          success:true,
          message:"Product deleted successfully"
      })
})
// Single Product all details --- api/v1/api/product/:id for all users`
export const ProductSigleProductDetails = asyncTryCatch(async (req , res , next) => {
    const product = await Product.findById(req.params.id);
    
    if(!product){
        return next(new ErrorHandler("Product not found", 404))
      }
      res.status(200).json({
          success:true,
          message:"Product details",
          product
      })
}   )
