import React from "react";
import { photoGrid } from "../Assets";
import "../CSS/Header.css";

const Header = () => {
  return (
    <div className="header-main">
      <img src={photoGrid} alt="" />
    </div>
  );
};

export default Header;
