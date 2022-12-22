import React, { useEffect } from "react";
import { Route, Link, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import Bikes from "./Bikes";
import { fetchBikesAsync } from "../store/BikeSlice";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBikesAsync());
  });

  return (
    <div>
      <h1>City Bike Usage Tracker</h1>
      <main>
        <div className="bikelist">
          <Routes>
            <Route path="/" element={<Bikes />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default Main;
