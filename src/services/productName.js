import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiKey = import.meta.env.VITE_RAPID_API_PRODUCT_KEY;

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://mybusiness-ai-generated-business-name-generator.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'mybusiness-ai-generated-business-name-generator.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (params) => `generate_business_name?business_detail=${params.description}`
        }),
    })
});

export const { useLazyGetProductsQuery } = productApi;