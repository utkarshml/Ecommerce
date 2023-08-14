import "../assets/styles/categorycatalog.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { BiAdjust, BiMobile, BiAlarmOff } from "react-icons/bi";
import { useEffect, useState } from "react";

function CategoryCatalog() {
  const [slide , setSlide]  = useState(33.33)
  const slidesToShow = () => {
    if (window.innerWidth <= 768) {
      setSlide(50);
    } else if (window.innerWidth <= 540) {
      setSlide(100);
    } else if(window.innerWidth >= 768) {
      setSlide(33.333)
    }
  }
  useEffect(()=>{
    window.addEventListener('resize', slidesToShow);
    return () => {
      window.removeEventListener('resize', slidesToShow);
    };
  },[])
  return (
    <div className="row container mt-5 d-flex justify-content-center m-auto">
      <div className=" catalog-box col-lg-4 col-12">
        <h2>Popular Categories</h2>
        <Link to={"/category"}>View Full Catalog</Link>
      </div>
      <Carousel
        className="col-lg-8 col-12 catalog-carasoul"
        showThumbs={false} // Hide thumbnails
        swipeable={true} // Enable swipe on touch devices
        emulateTouch={true} // Enable touch emulation for desktop
        showStatus={false} // Hide status indicator
        infiniteLoop={true} // Enable infinite loop
        centerMode={true} // Enable center mode for multiple items
        centerSlidePercentage={slide} // Adjust the percentage to control slide widt
      >
        <div className="carousel-container-inside  ">
          <BiAlarmOff />
          <span>Alarm</span>
        </div>
        <div className="carousel-container-inside  ">
          <BiMobile />
          <span>Alarm</span>
        </div>
        <div className="carousel-container-inside  ">
          <BiAlarmOff />
          <span>Alarm</span>
        </div>
        <div className="carousel-container-inside  ">
          <BiAdjust />
          <span>Alarm</span>
        </div>
        <div className="carousel-container-inside  ">
          <BiAdjust />
          <span>Alarm</span>
        </div>
      </Carousel>
    </div>
  );
}

export default CategoryCatalog;
