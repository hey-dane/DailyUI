import React, { useState } from "react";
import bambooImage1 from "/src/assets/Bamboo1.png";
import bambooImage2 from "/src/assets/Bamboo2.png";
import bambooImage3 from "/src/assets/Bamboo3.png";
import BambooTree from "/src/assets/BambooTree.svg";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.landingPageContainer}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar w/ text
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarText"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
            <span className="navbar-text">
              Navbar text with an inline element
            </span>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row vh-100">
          {/* Main content area */}
          <div className="col-md-12 main">
            <div className="row page1">
              <div className="container-fluid vh-100">
                <h1 className={styles.backgroundText}>Bamboo</h1>

                <div className={`row ${styles.bambooImages}`}>
                  {/* Ensure this is a row */}
                  <div className="col-4">
                    <img
                      src={bambooImage1}
                      alt="Bamboo Growth"
                      className={styles.bambooImage}
                    />
                  </div>
                  <div className="col-4">
                    <img
                      src={bambooImage2}
                      alt="Bamboo Tree"
                      className={styles.bambooImage}
                      style={{ position: "relative", zIndex: -2 }}
                    />
                  </div>
                  <div className="col-4">
                    <img
                      src={bambooImage3}
                      alt="Bamboo Leaves"
                      className={styles.bambooImage}
                    />
                  </div>
                </div>
              </div>

              <div className="container-fluid vh-100 page2">Page 2</div>
              <div className="container-fluid vh-100 page3">Page 3 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
