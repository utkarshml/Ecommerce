/* eslint-disable react/prop-types */
import ReactStars from "react-rating-stars-component";
import "../assets/styles/productCard.scss";
import { BiHeart } from "react-icons/bi"
import {Link} from "react-router-dom"

function ProductCard({product}) {
  return (
   <>
   {console.log(product)}
  <div className="featured_slider_item col-3 ">
    <div className="border_active"></div>
    <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
      <div className="product_image d-flex flex-column align-items-center justify-content-center">
        <img src={product.images[0].url} alt={product.name}/>
        </div>
      <Link to={product._id} className="product_content">
        <div className="product_price discount">${product.price}<span>$300</span></div>
        <div className="product_name"><div>
          <h3>
            {product.name}</h3></div>
        </div> 

        <div className="d-flex justify-content-center">
          <ReactStars classNames={"reactstars"} activeColor={"tomato"} edit={false} size={25}  value={product.rating} isHalf={true}/>
        </div>
        <button className="addtocartbutton">
          Add To Cart
        </button>
      </Link>
      <div className="product_fav"><BiHeart/></div>
      <ul className="product_marks">
        <li className="product_mark product_discount">-25%</li>
        <li className="product_mark product_new">new</li>
      </ul>
    </div>
  </div>
  </>
  )
}
export default ProductCard