import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import Theme, { colors } from "../../themes";
import "../assets/styles/header.scss";
import { IoIosArrowDown } from "react-icons/io"
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import {RxCross2} from "react-icons/rx"
// import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarColor, setNavbarColor] = useState({background : "transparent"}); // Default color
  const [toggleClass , setToggleClass] = useState(false) 
  const bgColor = useColorModeValue("white", "#1A202C");
    
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 100) { // Adjust the scroll threshold as needed
      setNavbarColor({
        background:bgColor,
        boxShadow : "0 0 31px 7px rgb(0,0,0, 0.2)",
      }); // Change navbar color when scrolled
    } else {
      setNavbarColor({background : "transparent"}); // Reset to default color
    }
  }, [scrollPosition]);

   useEffect(()=>{
    if(toggleClass){
      document.querySelector("body").classList.add("mobile-nav-active")
    }
    else {
      document.querySelector("body").classList.remove("mobile-nav-active")
    }
    
   },[toggleClass])

  const ToggleHandler = ()=>{
    setToggleClass(!toggleClass)
  }

  return (
    <>
    {/* <!-- ======= Header ======= --> */}
  <header style={navbarColor} id="header" className="header d-flex flex-column align-items-center fixed-top">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <Link to={"/"} className="logo d-flex align-items-center">
        {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
        {/* <!-- <img src="assets/img/logo.png" alt=""> --> */}
       My<span>Shop</span>
      </Link>

      <HiOutlineMenuAlt3 onClick={ToggleHandler} className={`mobile-nav-toggle mobile-nav-show ${toggleClass === false ? "" : "d-none"}`} />
      <RxCross2 onClick={ToggleHandler} className={`mobile-nav-toggle mobile-nav-hide ${toggleClass === false ? "d-none" : ""}`}/>
      <nav id="navbar" className="navbar">
        <Box as={"ul"}>
          <li onClick={ToggleHandler}><Link to={"/"} className="active">Home</Link></li>
          <li onClick={ToggleHandler}><Link to={"/shop"}>Shop</Link></li>
          <li onClick={ToggleHandler}><Link to={"/brands"}>Brands</Link></li>
          <li onClick={ToggleHandler}><Link to={"/product"}>Product</Link></li>
          <li className="dropdown">  <Link to={"/category"}><span>Category</span><IoIosArrowDown/></Link>
            <ul className="shadow-lg mt-3">
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><Link to={"/"}><span>Deep Drop Down</span> <IoIosArrowDown/> </Link>
                <ul className="shadow-lg">
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><Link className="login get-a-quote" to={"/login"} >Login</Link></li>
          <li><Link className="get-a-quote" to={"/register"}>Register</Link></li> 
          <Theme className="ms-3 d-lg-none"/>
        </Box>
        <Theme className="ms-5"/>
      </nav>
      {/* <!-- .navbar --> */}

    </div>
    {/* <SearchBar className={ `searchbar ${scrollPosition > 100 ? "d-none" : " "}` }/> */}
  </header>
  {/* <!-- End Header --> */}
  {/* <!-- End Header --> */}
    </>
  )
}

export default Header