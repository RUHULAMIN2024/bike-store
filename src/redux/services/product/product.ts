import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (userInfo) => ({
        url: "/product",
        method: "POST",
        body: userInfo,
      }),
    }),
    getProducts: builder.query({
      query: () => "/product",
    }),
    getProductById: builder.query({
      query: (id) => `/product/${id}`,
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetProductsQuery,
  useGetProductByIdQuery,
} = productApi;
