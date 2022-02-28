import React from "react";
import "../../CSS/Body/Card.css";
import { star, card1 } from "../../Assets";

const Card = ({ Image, rating, reviews, country, title, price }) => {
  return (
    <div className="card-body">
      <img src={`src/Airbnb-project/Assets/${Image}`} alt="profile" />
      <div className="card-rating">
        <img src={star} alt="" />
        <p>
          {rating} ({reviews}) . {country}
        </p>
      </div>
      <h5>{title}</h5>
      <h5>{`From $${price} / person`}</h5>
    </div>
  );
};

export default Card;
