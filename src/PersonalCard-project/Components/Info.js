import React from "react";
import { ProfilePic, Linkedin, Email } from "../Assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../CSS/Info.css";
const Info = () => {
  return (
    <div className="profile-section">
      <img src={ProfilePic} alt="profile pic" />
      <div className="description-section">
        <h1>Emilly Cruise</h1>
        <h4>React Developer</h4>
        <p>California</p>
      </div>
      <div className="btn-section">
        <button className="btn-email">Email</button>
        <button className="btn-linkedin">LinkedIn</button>
      </div>
    </div>
  );
};

export default Info;
