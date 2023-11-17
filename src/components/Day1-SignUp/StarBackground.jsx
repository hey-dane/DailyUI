import React from "react";
import styles from "./StarBackground.module.css";

const StarBackground = ({ stars }) => {
  return (
    <div className={styles.starBackground}>
      {stars.map((star, i) => (
        <div
          key={i}
          className={styles.star}
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}rem`,
            height: `${star.size}rem`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default StarBackground;
