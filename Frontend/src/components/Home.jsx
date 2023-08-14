import Banner from "./Banner"
import Chart from "./Chart"
import ProductTab from "./ProductTab"
import CategoryCatalog from "./CategoryCatalog"
import MetaData from "./MetaData"
import { allProduct } from "../action/actionProduct.js"
import {useDispatch , useSelector} from "react-redux"
import { useEffect } from "react"
import {enqueueSnackbar} from 'notistack'
function Home() {
const dispatch = useDispatch()
  useEffect(()=>{
    if(error){
      return enqueueSnackbar(error, {
        variant : error,
        autoHideDuration : 5000
      } ) 
    }
    allProduct(dispatch)
  } , [dispatch] , [error] )
  const {error} = useSelector(
    (state) => state.products
  )
  return (
    <>
      <MetaData title={"MyShop - Home"}/>
     <Banner/>
     <Chart/>
     <ProductTab/>
     <CategoryCatalog/>
     <Banner className="my-5"/>
     <ProductTab className="my-5" slide="justify-content-end"/>
    </>
   
  )
}

export default Home