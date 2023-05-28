import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
   opened:false,
   pet: {}
  },
  reducers: {
    open: (state, action) => {
     
      state.opened = true;
      state.pet = action.payload;
    },
    close: (state, action) => {
     
      state.opened = false;
      state.pet = {};
    },
    
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
