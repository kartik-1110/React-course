import React from "react";
import Description from "./Description";
import Card from "./Card";
import Data from "../../Data/Data";
import "../../CSS/Body/Body.css";

const Body = () => {
  return (
    <div className="body-section">
      <Description />
      <div className="card-component">
        {Data.map((items) => {
          const { Image, rating, reviews, country, title, price } = items;
          return (
            <Card
              Image={Image}
              rating={rating}
              reviews={reviews}
              country={country}
              price={price}
              title={title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
