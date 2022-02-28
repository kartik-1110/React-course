import React from "react";
import "../CSS/Navbar.css";
import ReactLogo from "../Assets/react-logo.png";
const Navbar = () => {
  return (
    <div className="div-main">
      <div className="div-main-left">
        <img src={ReactLogo} alt="logo" />
        <h1>React Facts</h1>
      </div>
      <h3>React Course - Project 1</h3>
    </div>
  );
};

export default Navbar;
