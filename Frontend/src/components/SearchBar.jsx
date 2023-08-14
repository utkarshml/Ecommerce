import { BsSearch , BsCart , BsHeart } from "react-icons/bs";
import "../assets/styles/searchbar.scss"
function SearchBar(props) {
  return (
    <>
    <div className={props.className}>
        <div className="bar">
            <input className="form-control" placeholder="Search Products" type="text" />
            <button>
                 <BsSearch/>
            </button>
             
        </div>
      <div className="carticons">
        <button>
           <BsCart/> 
           <span>0</span>
        </button>
        <button>
            <BsHeart/>
            <span>0</span>
        </button>
        
      </div>
    </div>
    </>
  )
}

export default SearchBar