import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (userInfo) => ({
        url: "/order",
        method: "POST",
        body: userInfo,
      }),
    }),

    getOrders: builder.query({
      query: () => "/order",
    }),
    updateOrderStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/order/${id}/status`,
        method: "PUT",
        body: { status },
      }),
    }),
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/order/${id}`,
        method: "DELETE",
      }),
    }),

    MyOrders: builder.query({
      query: () => "/order/my-order",
    }),
    verifyOrder: builder.query({
      query: (order_id) => ({
        url: "/order/verify",
        params: { order_id },
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrdersQuery,
  useMyOrdersQuery,
  useVerifyOrderQuery,
  useDeleteOrderMutation,
  useUpdateOrderStatusMutation,
} = orderApi;
