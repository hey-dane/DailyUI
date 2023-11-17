import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUpForm from "./components/Day1-SignUp/SignUpForm";
import CreditCardForm from "./components/Day2-CCForm/CreditCardForm";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./components/Day3-/LandingPage";
import Calculator from "./components/Day4-Calculator/Calculator";

function App() {
  return (
    <div className="appContainer">
      <Header />
      <Routes>
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/creditcardform" element={<CreditCardForm />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/calculator" element={<Calculator />} />
        {/* Define more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
