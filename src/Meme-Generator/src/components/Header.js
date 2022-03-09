import React from "react";
import "../index.css";

// Header component (Main)
function Header() {
  return (
    <header className="header-main">
      <img className="header-img" src="./images/trollface.png" />
      <h2 className="header-title">Meme Generator</h2>
      <h4 className="header-right">React Course - Project 3</h4>
    </header>
  );
}

export default Header;
