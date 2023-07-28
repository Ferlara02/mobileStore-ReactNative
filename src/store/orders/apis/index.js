import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { URL_BASE_FIREBASE_REALTIME_DATABASE } from "../../../constants/firebase";

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL_BASE_FIREBASE_REALTIME_DATABASE }),
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      // se usa .mutation y no .query pq escribiremos datos nuevos en la db en vez de obtenerlos
      query: (order) => ({
        url: "/orders.json",
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["Orders"],
    }),
    getOrders: builder.query({
      query: () => "/orders.json",
      transformResponse: (response) => {
        if (!response) return [];
        return Object?.keys(response)?.map((key) => ({
          id: key,
          ...response[key],
        }));
      },
      providesTags: ["Orders"],
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrdersQuery } = ordersApi; //exportamos hook para utilizarlo
