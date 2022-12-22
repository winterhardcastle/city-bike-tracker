import { LinearProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBikes, fetchBikesAsync } from "../store/BikeSlice";

const Bikes = () => {
  const bikes = useSelector(selectBikes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBikesAsync());
  }, [bikes]);

  const howBusy = (bike) => {
    const num_stations = bike.stations.length;
    const how_busy = bike.stations.reduce((acc, currentValue) => {
      const free_bikes = currentValue.free_bikes;
      const empty_slots = currentValue.empty_slots;
      let tot = free_bikes + empty_slots;
      acc += empty_slots / tot;
    }, 0);
    console.log(free_bikes);
    return (how_busy / num_stations) * 100;
  };

  return (
    <div>
      {bikes && bikes.length
        ? bikes.map((bike) => {
            return (
              <div className="singleBike">
                <h1>{bike.name}</h1>
                <LinearProgress value={howBusy(bike)} />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Bikes;
