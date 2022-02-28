import React from "react";
import "../CSS/Footer.css";
import { Twitter, Facebook, Instagram, Github } from "../Assets";

const Footer = () => {
  return (
    <div className="footer-main">
      <img src={Twitter} alt="twitter" />
      <img src={Facebook} alt="FB" />
      <img src={Instagram} alt="insta" />
      <img src={Github} alt="github" />
    </div>
  );
};

export default Footer;
