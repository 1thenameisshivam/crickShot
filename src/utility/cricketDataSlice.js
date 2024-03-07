import { createSlice } from "@reduxjs/toolkit";

const cricketDataSlice = createSlice({
  name: "cricketData",
  initialState: {
    iccRanking: null,
  },
  reducers: {
    setIccRanking: (state, action) => {
      state.iccRanking = action.payload;
    },
  },
});

export const { setIccRanking } = cricketDataSlice.actions;
export default cricketDataSlice.reducer;
