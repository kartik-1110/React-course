import React from "react";
import "./CSS/main.css";
import Info from "./Components/Info";
import About from "./Components/About";
import Interests from "./Components/Interests";
import Footer from "./Components/Footer";

const PersonalCard = () => {
  return (
    <div className="main-card">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
};

export default PersonalCard;
