import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Favorite from "./components/Favorite";
import MainDisplay from "./components/MainDisplay";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorites" element={<Favorite />} />
      <Route path="/display" element={<MainDisplay />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
