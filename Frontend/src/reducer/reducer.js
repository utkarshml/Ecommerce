
import {
    ALL_CLEAR_REQUEST,
    ALL_REQUEST_ERROR,
    ALL_REQUEST_PROCCESS,
    ALL_REQUEST_SUCCESS  
 } from "../constants/contants.js"
 
 const reducerProduct = ( state = {products : []}, action) =>{
  switch (action.type) {
     case ALL_REQUEST_PROCCESS:
         return {
            product: [],
             loading: true
         }
      case ALL_REQUEST_SUCCESS:
         return {
             loading: false,
             productCount : action.payload.productCount,
             products: action.payload.products
         }
     case ALL_REQUEST_ERROR:
         return {
             ...state,
             loading: false,
             error: action.payload.error
         }
    case ALL_CLEAR_REQUEST:
         return {
             ...state,
             error: null
         }
     default:
         return state;
  }
 }
 export default reducerProduct;