import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    reservationState: {},
}



export const ReservationSlice = createSlice({
    name: "chambre",
  initialState,
  reducers: {
    addReservation: (state,{payload}) =>{
      console.log('state',payload);
      state.reservationState = payload
    }
  },
  extraReducers: {
    
  },
})



export const {addReservation} = ReservationSlice.actions;
export default ReservationSlice.reducer;