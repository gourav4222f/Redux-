import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const productApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    endpoints: (builder) => ({
        // we are reading data from dummyapi.com
        getallproducts: builder.query({
            query: () => '/products'
        }),
        getproductbyid: builder.query({
            query: (id) => `/products/${id}`
        }),

        addNewProduct: builder.mutation({
            query: (product) => ({
                url: '/products/add',
                method: 'POST',
                headers:{"content-type":"aplication/json"},
                body: product
            }),      
        }),

        updateproduct:builder.mutation({    
            query: (product) => ({
                url: `/products/${product.id}`,
                method: 'PUT',
                headers:{"content-type":"aplication/json"},
                body: product
            }),
        }),

        deleteproduct:builder.mutation({    
            query:(id)=>({
                url:`/products/${id}`,
                method:'DELETE'
            })
        })

    })

})



export const { useGetallproductsQuery, useGetproductbyidQuery ,useAddNewProductMutation, useUpdateproductMutation , useDeleteproductMutation } = productApi