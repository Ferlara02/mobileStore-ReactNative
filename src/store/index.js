import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { authApi } from "./auth/api";
import authReducer from "./auth/auth.slice";
import cartReducer from "./cart/cartSlices";
import { categoriesApi } from "./categories/apis";
import categoriesReducer from "./categories/categoriesSlices";
import { ordersApi } from "./orders/apis";
import { productsApi } from "./products/apis";
import productsReducer from "./products/productsSlices";
import { settingsApi } from "./settings/api";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    auth: authReducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [settingsApi.reducerPath]: settingsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoriesApi.middleware,
      productsApi.middleware,
      ordersApi.middleware,
      authApi.middleware,
      settingsApi.middleware
    ),
});

setupListeners(store.dispatch);
