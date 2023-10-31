import React from "react";
import "./StarBackground.css";

const StarBackground = ({ starCount }) => {
  const stars = Array.from({ length: starCount }, (_, i) => (
    <div
      key={i}
      className="star"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    ></div>
  ));

  return <div className="star-background">{stars}</div>;
};

export default StarBackground;
