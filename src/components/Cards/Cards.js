import React from "react";
import "./Cards.css";

const Card = ({ name, img, click }) => (
  <div>
    <img
      className="card"
      onClick={click}
      src={process.env.PUBLIC_URL + img}
      alt={name}
    />
  </div>
);

export default Card;
