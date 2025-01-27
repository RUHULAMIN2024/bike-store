import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    getAllCustomers: builder.query({
      query: () => ({
        url: "/auth/customer",
      }),
    }),
  }),
});

export const { useLoginMutation, useGetAllCustomersQuery } = authApi;
