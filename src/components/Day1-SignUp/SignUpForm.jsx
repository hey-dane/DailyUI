import React, { useState } from "react";
import "./signupcss.css";
// import StarMap from "./StarMap";
import StarBackground from "./StarBackground";

const SignUpForm = () => {
  const [formData, setFormData] = useState({});
  const completedFields = Object.values(formData).filter(Boolean).length;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="signup-main">
      <StarBackground starCount={completedFields * 10} />

      <div className="signup-container">
        <h2>Sign up for the Star to Star Gala</h2>
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
