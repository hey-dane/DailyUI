import React, { useState } from "react";
import "./signupcss.css";
// import StarMap from "./StarMap";
import StarBackground from "./StarBackground";

const SignUpForm = () => {
  const [stars, setStars] = useState([]);

  const handleInputChange = (e) => {
    const numberOfNewStars = Math.floor(Math.random() * 7) + 1;
    const newStars = [];

    for (let i = 0; i < numberOfNewStars; i++) {
      const size = Math.random() * 0.25 + 0.1;
      newStars.push({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: size,
      });
    }

    setStars((prevStars) => [...prevStars, ...newStars]);
  };

  return (
    <div className="signup-main">
      <StarBackground stars={stars} />

      <div className="signup-container">
        <h2>Registration Form</h2>
        <div className="signup-form">
          <form>
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              required
              onChange={handleInputChange}
            />

            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              required
              onChange={handleInputChange}
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              required
              onChange={handleInputChange}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={handleInputChange}
            />

            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              required
              onChange={handleInputChange}
            />

            <div className="signup-button">
              <button type="submit" id="signupbutton" name="signupbutton">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
