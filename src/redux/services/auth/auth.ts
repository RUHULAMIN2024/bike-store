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
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/register",
        method: "POST",
        body: userInfo,
      }),
    }),
    getAllCustomers: builder.query({
      query: () => ({
        url: "/auth/customer",
      }),
    }),
    getUserByEmail: builder.query({
      query: (email) => ({
        url: `/auth/user/${email}`,
      }),
    }),

    updatePassword: builder.mutation({
      query: ({ email, newPassword }) => ({
        url: `/auth/${email}/password`,
        method: "PATCH",
        body: {
          newPassword,
        },
      }),
    }),

    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/auth/customer/${userId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetAllCustomersQuery,
  useGetUserByEmailQuery,
  useUpdatePasswordMutation,
  useDeleteUserMutation,
} = authApi;
