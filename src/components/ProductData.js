import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addCart } from "./Store/cartSlice";

const ProductData = () => {
  let { data } = useSelector((state) => state.cart);
  let parmas = useParams();
  let dispatch = useDispatch();
  let product = data.filter((product) => {
    if (parmas.id == product.id) {
      return true;
    }
    return false;
  });
  let handlecart = (id) => {
    let filtercartItem = data.filter((item) => {
      if (item.id == id) {
        return true;
      }
      return false;
    });
    dispatch(addCart(filtercartItem));
  };
  return (
    <div className="productdataContainer">
      {product.map((item) => {
        return (
          <div className=" product" key={item.id}>
            <div> {<img src={item.image} />}</div>

            <div className="name">
              <div className="productname">{item.productname}</div>

              <div className="cost">RS/-{item.cost}</div>
              <div className="size">
                <div className="s">S</div>
                <div className="l">L</div>
                <div className="m">M</div>
                <div className="xl">XL</div>
                <div className="xxl">XXL</div>
              </div>
              <div>
                <ul>
                  <li>
                    Available offers Bank Offer10% off on Bank of Baroda Credit
                  </li>
                  <li>
                    Card EMI Txns, up to ₹2,000 on orders of ₹10,000 and
                    aboveT&C
                  </li>
                  <li>Bank Offer10% off on IDFC FIRST Bank Credit Card EMI</li>

                  <li>
                    Transactions, up to ₹1,750 on orders of ₹10,000 and aboveT&C
                  </li>
                  <li>
                    Bank Offer8% off on Yes Bank Credit Card EMI Transactions,
                    up
                  </li>
                  <li>
                    to ₹2,000 on orders of ₹10,000 and aboveT&C Special PriceGet
                  </li>
                  <li>extra 69% off (price inclusive of cashback/coupon)T&C</li>
                </ul>
              </div>
              <div className="buttons">
                <button
                  className="addcartbutton"
                  onClick={() => {
                    handlecart(parmas.id);
                  }}
                >
                  Add Cart
                </button>
                <button className="buybutton">Buy </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductData;
