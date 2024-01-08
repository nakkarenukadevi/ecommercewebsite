import React, { useEffect, useState } from "react";
import mockdata from "../mockdata.json";
import SingleProduct from "./ProductData";
import { data } from "../data";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { inistialdata, addCart } from "./Store/cartSlice";

const Product = () => {
  let { cartItem, data } = useSelector((state) => state.cart);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(inistialdata(mockdata.data));
  }, []);
  const handleCartItem = (id) => {
    let filtercartItem = data.find((item) => {
      if (item.id == id) {
        return item;
      }
    });
    dispatch(addCart(filtercartItem));
  };
  return (
    <div className="product-container">
      <div>
        <h1>All Product</h1>
      </div>
      {data.map((item) => {
        return (
          <div className="product" key={item.id}>
            <div>
              <Link to={"productdata/" + item.id}>
                <img
                  src={item.image}
                  style={{ width: "300px", height: "300px" }}
                />
              </Link>
            </div>
            <div>
              <button onClick={() => handleCartItem(item.id)}>Add cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
