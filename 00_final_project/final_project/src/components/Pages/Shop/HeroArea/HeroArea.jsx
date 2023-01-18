import React from "react";
import "./styles.scss";
import heroAreaImg from "../../../../assets/shop/shop_1.jpg";

export const HeroArea = ({ filterName }) => {
  return (
    <div className="hero-area">
      <div className="description">
        <h2>{filterName}</h2>
        <p>These awesome products</p>
      </div>
      <img src={heroAreaImg} alt="hero area image" />
    </div>
  );
};
