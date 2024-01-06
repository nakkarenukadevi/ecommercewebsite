import React, { useEffect, useState } from "react";
import mockdata from "../mockdata.json";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";

const Product = () => {
  let [product, setproduct] = useState([]);
  useEffect(() => {
    getdata();
  }, []);
  let getdata = () => {
    setproduct(mockdata.data);
  };
  return (
    <div className="product-container">
      {product.map((item) => {
        return (
          <div className="product" key={item.id}>
            <div>
              <Link to={"singleproduct/" + item.id}>
                <img
                  src={item.image}
                  style={{ width: "300px", height: "300px" }}
                />
              </Link>
            </div>
            <div>
              <button>Add cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
