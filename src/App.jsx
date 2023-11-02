import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUpForm from "./components/Day1-SignUp/SignUpForm";
import Header from "./components/Header";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/signup" element={<SignUpForm />} />
        {/* Define more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
