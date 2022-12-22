import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBikesAsync = createAsyncThunk("fetchBikes", async () => {
  try {
    //CALL TO BIKES API
    const { data } = axios.get("http://api.citybik.es/v2/networks");
    return data;
  } catch (error) {
    console.error(error);
  }
});

const BikeSlice = createSlice({
  name: "bikes",
  initialState: [],
  reducers: [],
  extraReducers: (builder) => {
    builder.addCase(fetchBikesAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectBikes = (state) => {
  return state.bikes;
};

export default BikeSlice.reducer;
