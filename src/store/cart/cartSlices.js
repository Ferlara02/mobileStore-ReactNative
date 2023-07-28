import { createSlice } from "@reduxjs/toolkit";
import { sumTotal } from "../../utils/functions";

const initialState = {
  items: [],
  total: 0,
};
const cartSlices = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.items.find((item) => item.id === action.payload.id);
      if (itemInCart && itemInCart.stock <= itemInCart.quantity) {
        return;
      }
      if (itemInCart) {
        itemInCart.quantity += 1;
        state.total = sumTotal(state.items)
      } else {
        state.items.push(action.payload);
        state.total = sumTotal(state.items)
      }
    },
    increaseItemQty: (state, action) => {
      const itemInCart = state.items.find((item) => item.id === action.payload.id);
      if (itemInCart && itemInCart.stock > itemInCart.quantity) {
        itemInCart.quantity += 1;
        state.total = sumTotal(state.items)
      }
    },
    decreaseItemQty: (state, action) => {
      const itemInCart = state.items.find((item) => item.id === action.payload.id);
      if (itemInCart && itemInCart.quantity > 1) {
        itemInCart.quantity -= 1;
        state.total = sumTotal(state.items)
      }
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.total = sumTotal(state.items)
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addToCart, increaseItemQty, decreaseItemQty, removeItemFromCart, clearCart } =
  cartSlices.actions;
export default cartSlices.reducer;
