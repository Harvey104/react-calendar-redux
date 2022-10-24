import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import EventPage from "../Pages/EventPage";
import FruitsAndVegetables from "../Pages/FruitsAndVegetables";

const Router = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/event/:year/:month/:day" element={<EventPage />} />
        <Route path="/fruits-vegetables/" element={<FruitsAndVegetables />} />
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default Router;
