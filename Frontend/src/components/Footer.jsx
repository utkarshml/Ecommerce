import '../assets/styles/footer.scss'


import { BiLogoFacebook , BiCopyright , BiLogoInstagram , BiLogoLinkedin , BiGitBranch} from "react-icons/bi"
const footerLinks = [ "Home" , "Service" , "About" , "Product"]
function Footer() {
  return (
    <>
    <section className="container footer">
        <div className="row">
          <div className="col-lg-4 my-lg-0 my-5 col-12 d-flex justify-content-start flex-column">
           <div className="logo-footer">
            My<span>Shop</span>
           </div>
           <div className="d-flex social-icons">
           <a href="#">
            <BiLogoFacebook/>
            </a> 
            <a href="#">
               <BiGitBranch/> 
            </a>
            <a href="#">
                <BiLogoInstagram/>
            </a>
            <a href="#">
                <BiLogoLinkedin/>
            </a>
            
           </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="row">
                <ul className=" footer-links col-6">
              {
                footerLinks.map(item =>{
                   return <li key={footerLinks.indexOf(item)}><a>
                   {item} </a></li> 
                })
              }
    
                </ul>
                <ul className="col-6 footer-links">
                {
                footerLinks.map(item =>{
                   return <li key={footerLinks.indexOf(item)}><a>
                   {item} </a></li> 
                })
              }
                </ul>
            </div>
          </div>
        </div>
        <div className="info">
          <span>  Copyright  <BiCopyright/> 2023</span>
        </div>
    </section>
    </>
  )
}

export default Footer