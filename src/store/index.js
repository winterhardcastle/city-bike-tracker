import { configureStore } from "@reduxjs/toolkit";
import bikesReducer from "./BikeSlice";

const store = configureStore({
  reducer: {
    bikes: bikesReducer,
  },
});

export default store;
