import { configureStore } from '@reduxjs/toolkit'
import {ChambreSlice,DashboardSlice, ReservationSlice} from "./pages"


export const store = configureStore({
    reducer: {
      chambre: ChambreSlice,
      dashboard:DashboardSlice,
      reservation:ReservationSlice
    }
})




