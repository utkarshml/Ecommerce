/* eslint-disable react/prop-types */
import { useState } from "react";
import "../assets/styles/tabbar.scss";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import Loader from "./Loader";
function ProductTab({ className, slide }) {
  const { products, loading } = useSelector((state) => state.products);
  const [tab, setTab] = useState(1);
  const TabHandler = (index) => {
    setTab(index);
  };

  return (
    <>
      <div className={`tab-bar-container container ${className}`}>
        <div className={`tab-bars ${slide}`}>
          <div
            onClick={() => {
              TabHandler(1);
            }}
            className={`${tab === 1 ? " tab-active tab tab-1 " : "tab tab-1"} `}
          >
            Feature
          </div>
          <div
            onClick={() => {
              TabHandler(2);
            }}
            className={`${tab === 2 ? " tab-active tab tab-1 " : "tab tab-1"} `}
          >
            Product
          </div>
          <div
            onClick={() => {
              TabHandler(3);
            }}
            className={`${tab === 3 ? " tab-active tab tab-1 " : "tab tab-1"} `}
          >
            Product
          </div>
        </div>
        <div className="tab-content">
          <div
            className={`${
              tab === 1 ? " content tab-content-1 row " : "d-none"
            } `}
          >
            {loading ? (
              <Loader />
            ) : (
              products &&
              products.map((product) => {
                return <ProductCard key={product._id} product={product} />;
              })
            )}
          </div>
          <div
            className={`${
              tab === 2 ? " content row tab-content-2 " : "d-none"
            } `}
          ></div>
          <div
            className={`${
              tab === 3 ? " content tab-content-3 row " : "d-none"
            } `}
          ></div>
        </div>
      </div>
    </>
  );
}

export default ProductTab;
