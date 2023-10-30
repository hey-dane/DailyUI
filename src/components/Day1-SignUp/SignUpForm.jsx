import React from "react";
import "./signupcss.css";
import StarMap from "./StarMap";

const SignUpForm = () => {
  return (
    <div className="signup-main">
      <StarMap />
      <div className="signup-container">
        <h2>Sign up for the Star to Star Gala</h2>
        <div className="signup-form">
          <form>
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" name="firstname" required />
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" name="lastname" required />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" required />
            <label htmlFor="password">Password</label>
            <input type="text" id="password" name="password" required />
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="text"
              id="confirmpassword"
              name="confirmpassword"
              required
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
