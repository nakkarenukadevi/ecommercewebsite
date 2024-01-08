import React from "react";
import search_Icon from "./magnifying-glass-solid.svg";
import cart_icon from "./cart-shopping-solid.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  let cartData = useSelector((state) => state.cart.cartItem);

  return (
    <div className="navbar-container">
      <div className="wrapper">
        <div className="language">
          <div className="lag">EN</div>
          <div className="searchIcon">
            <input type="text" className="searchInput" />
            <img src={search_Icon} />
          </div>
        </div>
        <div>
          <h1 className="logo">LAMA</h1>
        </div>
        <div className="cart">
          <span className="registe">REGISTER</span>
          <span className="signin">SiGN IN</span>
          <span>
            <Link to="cart">
              <img src={cart_icon} style={{ width: "25px" }} />(
              {cartData.length})
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
