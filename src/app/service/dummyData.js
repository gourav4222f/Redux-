import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const productApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    endpoints: (builder) => ({
        // we are reading data from dummyapi.com
        getallproducts: builder.query({
            query: () => '/products'
        }),
        getproductbyid:builder.query({
            query: (id) => `/products/${id}`
        })
    })
})



export const { useGetallproductsQuery,useGetproductbyidQuery } = productApi