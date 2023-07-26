import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import cartReducer from "./cart/cartSlices";
import { categoriesApi } from "./categories/apis";
import categoriesReducer from "./categories/categoriesSlices";
import productsReducer from "./products/productsSlices";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categoriesApi.middleware),
});


setupListeners(store.dispatch)