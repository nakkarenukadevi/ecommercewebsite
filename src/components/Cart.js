import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "./Store/cartSlice";

const Cart = () => {
  let { data, cartItem } = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  let removecartItem = (id) => {
    let cart = cartItem.filter((product) => {
      if (product.id == id) {
        return false;
      }
      return true;
    });
  };
  return (
    <div className="cart">
      {cartItem.map((item) => {
        return (
          <div className="product" key={item.id}>
            <div>
              <img
                src={item.image}
                style={{ width: "300px", height: "300px" }}
              />
            </div>
            <div>
              <button
                className="removebutton"
                onClick={() => {
                  removecartItem(item.id);
                }}
              >
                remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
