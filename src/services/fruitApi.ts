import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { IFruit } from "../types";

export const fruitApi = createApi({
  reducerPath: "fruitApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getAllFruits: builder.query<IFruit[], void>({
      query: () => "fruit/all",
    }),
  }),
});

export const { useGetAllFruitsQuery } = fruitApi;
