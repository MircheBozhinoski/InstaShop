import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { Cartcontext } from "../../context/Context";

const Navbar = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const totalQty = state.reduce((total, item) => {
    return (total += item.quantity);
  }, 0);
  return (
    <div className="navbar">
      <div className="links">
        <h1 className="title">InstaShop</h1>
        <NavLink to="/">
          <h4>HOME </h4>
        </NavLink>
        <NavLink to="/cart">
          <ShoppingCart className="icon" size={35} /> ( {totalQty} )
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
