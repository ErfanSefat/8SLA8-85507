import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { mockApi } from "../services/mockApi";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["ChargeValues"],
  endpoints: (builder) => ({
    getChargeValues: builder.query({
      queryFn: async () => {
        try {
          const data = await mockApi.getChargeValues();
          return { data };
        } catch (error) {
          return { error: { status: 500, data: "خطا در دریافت اطلاعات" } };
        }
      },
      providesTags: ["ChargeValues"],
    }),
    processPayment: builder.mutation({
      queryFn: async (paymentData) => {
        try {
          const data = await mockApi.processPayment(paymentData);
          return { data };
        } catch (error) {
          return { error: { status: 500, data: "خطا در پردازش پرداخت" } };
        }
      },
    }),
  }),
});

export const { useGetChargeValuesQuery, useProcessPaymentMutation } = apiSlice;
