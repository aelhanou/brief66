import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useFetch } from "../../Hooks/useFetch";

const { post } = useFetch;

export const Reservation = createAsyncThunk(
  "reservationinfo/Reservation",
  async (body) => {
    let res = await post("reservation", body);
    console.log('dddd',res);
    return res;
  }
);

const initialState = {
  reservationinfoState: {},
};

export const ReservationinfoSlice = createSlice({
  name: "reservationinfo",
  initialState,
  reducers: {},
  extraReducers: {
    [Reservation.fulfilled]: (state, { payload }) => {
      console.log(payload);
      console.log(state);
    },
  },
});

// export const {addReservation} = ReservationSlice.actions;
export default ReservationinfoSlice.reducer;
