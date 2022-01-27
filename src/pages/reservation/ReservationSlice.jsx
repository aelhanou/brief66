import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useFetch } from "../../Hooks/useFetch";

const { post, get } = useFetch;

export const addReservation = createAsyncThunk(
  "chambre/addReservation",
  async (body) => {
    let res = await post("setreservationData", body);
    return res;
  }
);

export const getReservationData = createAsyncThunk(
  "chambre/getReservationData",
  async () => {
    let res = await get("getreservationData");
    return res;
  }
);

const initialState = {
  reservationState: {},
};

export const ReservationSlice = createSlice({
  name: "chambre",
  initialState,
  reducers: {},
  extraReducers: {
    [addReservation.fulfilled]: (state, { payload }) => {
      console.log("set data from reservation");
      console.log(state, payload);
    },
    [getReservationData.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.reservationState = payload;
    }
  },
});

// export const {addReservation} = ReservationSlice.actions;
export default ReservationSlice.reducer;
