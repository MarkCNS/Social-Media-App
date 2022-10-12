import { createSlice } from "@reduxjs/toolkit";

export const getContactSlice = createSlice({
  name: "getContact",
  initialState: {
    getContactData: {},
  },
  reducers: {
    getContactHook: (state, action) => {
      state.getContactData = action.payload;
    },
  },
});

export const { getContactHook } = getContactSlice.actions;

export default getContactSlice.reducer;
