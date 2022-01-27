import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useFetch } from "../../Hooks/useFetch";

const { get, post } = useFetch;

export const getAllChambres = createAsyncThunk(
  "chambre/getAllChambres",
  async () => {
    return await get("chambres");
  }
);

export const addChambre = createAsyncThunk(
  "chambre/addChambre",
  async (body) => {
    let res = await post("addChambre", body);
    // dispatch(getAllChambres())
    return await res.json();
  }
);

const initialState = {
  chambreState: {},
  allChambares: [],
};

export const ChambreSlice = createSlice({
  name: "chambre",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllChambres.fulfilled]: (state, { payload }) => {
      console.log(state.allChambares);
      state.allChambares = payload;
    },
    [addChambre.fulfilled]: (state, { payload }) => {

      state.allChambares.push(payload);
    },
  },
});

// export const {} = ChambreSlice.actions;
export default ChambreSlice.reducer;
