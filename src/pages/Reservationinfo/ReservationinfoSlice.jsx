import { createSlice } from "@reduxjs/toolkit";





const initialState = {
  reservationinfoState: {},
};

export const ReservationinfoSlice = createSlice({
  name: "reservationinfo",
  initialState,
  reducers: {},
  extraReducers: {},
});

// export const {addReservation} = ReservationSlice.actions;
export default ReservationinfoSlice.reducer;
