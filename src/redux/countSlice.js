import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: "count",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment } = countSlice.actions;
export default countSlice.reducer;
