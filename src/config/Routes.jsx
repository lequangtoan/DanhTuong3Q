import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

const Routesr = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Routesr;
