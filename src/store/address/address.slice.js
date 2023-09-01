import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  imageUrl: "",
};
const addressSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    saveImageUrl(state, action) {
      state.imageUrl = action.payload;
    },
  },
});

export const { saveImageUrl } = addressSlice.actions;
export default addressSlice.reducer;
