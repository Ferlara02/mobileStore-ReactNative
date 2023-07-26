import { createSlice } from "@reduxjs/toolkit";

import CATEGORIES from "../../constants/data/categories2.json";

const initialState = {
  data: CATEGORIES,
};
const categoriesSlices = createSlice({
  name: "categories",
  initialState,
  reducers: {
    // addProduct: (state, action) => {
    //   state.data.push(action.payload);
    // },
  },
});

export default categoriesSlices.reducer;
