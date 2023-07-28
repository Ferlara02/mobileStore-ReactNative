import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import cartReducer from "./cart/cartSlices";
import { categoriesApi } from "./categories/apis";
import categoriesReducer from "./categories/categoriesSlices";
import { ordersApi } from "./orders/apis";
import { productsApi } from "./products/apis";
import productsReducer from "./products/productsSlices";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoriesApi.middleware,
      productsApi.middleware,
      ordersApi.middleware
    ),
});

setupListeners(store.dispatch);
