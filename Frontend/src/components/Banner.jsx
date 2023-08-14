
import "../assets/styles/Banner.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel }  from 'react-responsive-carousel'
import headerImg from "../assets/img/banner_background.jpg"
function Banner(props) {
  return (
    <Carousel
    {...props}
    showThumbs={false} // Hide thumbnails
    showStatus={false} // Hide status indicator
    infiniteLoop={true} // Enable infinite loop
    >
      
                <div className="carousel-container-inside">
                    <img src={headerImg} />
                    <div className="overlay-carousel">
                      <h1>This is Product</h1>
                      <h3 className="price-span">Price :<span>200</span></h3>
                    <button>Shop Now</button>
                    </div>
                </div>

                <div className="carousel-container-inside">
                    <img src={headerImg} />
                    <div className="overlay-carousel">
                      <h1>This is Product</h1>
                      <h3 className="price-span">Price :<span>200</span></h3>
                    <button>Shop Now</button>
                    </div>
                </div>

                <div className="carousel-container-inside">
                    <img src={headerImg} />
                    <div className="overlay-carousel">
                      <h1>This is Product</h1>
                      <h3 className="price-span">Price :<span>200</span></h3>
                    <button>Shop Now</button>
                    </div>
                </div>
             
    </Carousel>
  )
}

export default Banner