import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PlaceToVisit from "./components/places/PlaceToVisit";
import Home from "./components/Home";
import TimeToVisit from "./components/place1/TimeToVisit";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Place" element={<PlaceToVisit />} />
        <Route path="/Time" element={<TimeToVisit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
