import React from "react";
import "./StarMap.css";

const StarMap = () => {
  return (
    <div className="starmap-container">
      <div
        className="constellation"
        data-info="Aquarius, the water bearer..."
      ></div>
      <div className="constellation" data-info="Aries, the ram..."></div>
      <div className="constellation" data-info="Cancer, the crab..."></div>
      <div className="constellation" data-info="Cassiopeia, the queen..."></div>
      <div className="constellation" data-info="Gemini, the twins..."></div>
      <div
        className="constellation"
        data-info="Sagittarius, the archer..."
      ></div>
      <div className="constellation" data-info="Taurus, the bull..."></div>
      <div
        className="constellation"
        data-info="Ursa Major, aka the Big Dipper..."
      ></div>
      <div
        className="constellation"
        data-info="Ursa Minor, aka the Little Dipper..."
      ></div>
      <div
        className="constellation"
        data-info="Canis Major, the great dog..."
      ></div>
      <div
        className="constellation"
        data-info="Pegasus, the winged horse..."
      ></div>
      <div className="constellation" data-info="Virgo, the virgin..."></div>
      <div className="constellation" data-info="Orion, the hunter..."></div>
    </div>
  );
};

export default StarMap;
