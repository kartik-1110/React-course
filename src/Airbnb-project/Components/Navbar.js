import React from "react";
import { airbnbLogo } from "../Assets";
import "../CSS/Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-main">
      <img src={airbnbLogo} alt="" />
    </div>
  );
};

export default Navbar;
