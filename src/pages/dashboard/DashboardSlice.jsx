import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  DashboardState: {},
};

export const DashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: {},
});

// export const {} = chambreSlice.actions;
export default DashboardSlice.reducer;
