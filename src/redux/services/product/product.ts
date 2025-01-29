import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (data) => ({
        url: "/product",
        method: "POST",
        body: data,
      }),
    }),
    getProducts: builder.query({
      query: () => "/product",
    }),
    getProductById: builder.query({
      query: (id) => `/product/${id}`,
    }),
    updateProduct: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/product/${id}`,
        method: "PUT",
        body: updatedData,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetProductsQuery,
  useGetProductByIdQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
