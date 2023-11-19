import React, { useState } from "react";
import styles from "./SignUpForm.module.css";
import StarBackground from "./StarBackground";

function SignUpForm() {
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

      <div className={styles.container}>
        <h2 className={styles.title}>Registration Form</h2>
        <div className="signup-form">
          <form className={styles.formContainer}>
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              className={styles.signupInput}
              required
              onChange={handleInputChange}
            />

            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              className={styles.signupInput}
              required
              onChange={handleInputChange}
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              className={styles.signupInput}
              required
              onChange={handleInputChange}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className={styles.signupInput}
              required
              onChange={handleInputChange}
            />

            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              className={styles.signupInput}
              required
              onChange={handleInputChange}
            />

            <div className={styles.button}>
              <button type="submit" id="signupbutton" className={styles.button}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
