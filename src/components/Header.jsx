import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate(); // Use the useNavigate hook to navigate

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setShowDropdown(false); // Close the dropdown after navigating
  };

  return (
    <header>
      <nav>
        <ul>
          {/* ... */}
          <li>
            <div className="dropdown" onClick={toggleDropdown}>
              <span>Dropdown</span>
              {showDropdown && (
                <ul className="dropdown-content">
                  <li onClick={() => handleNavigate("/signup")}>Sign Up</li>
                  <li onClick={() => handleNavigate("/creditcardform")}>
                    Credit Card Form
                  </li>
                  <li onClick={() => handleNavigate("/landingpage")}>
                    Landing
                  </li>
                  <li onClick={() => handleNavigate("/calculator")}>
                    Calculator
                  </li>
                  <li onClick={() => handleNavigate("/appicon")}>App Icon</li>
                  {/* ... */}
                </ul>
              )}
            </div>
          </li>
          {/* ... */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
