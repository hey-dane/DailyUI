import React from "react";
import "./StarBackground.css";

const StarBackground = ({ stars }) => {
  return (
    <div className="star-background">
      {stars.map((star, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default StarBackground;
