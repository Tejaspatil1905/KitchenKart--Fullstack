import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/Cart/cart";
import Placeorder from "./pages/placeorder/placeorder";
import Verify from "./pages/Verify/Verify";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/placeorder" element={<Placeorder />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
