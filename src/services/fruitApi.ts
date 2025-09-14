import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { IFruit } from "../types";

const WIKI_API_URL = "https://en.wikipedia.org/w/api.php";
const API_URL = "https://www.fruityvice.com/api/fruit";

export const fruitApi = createApi({
  reducerPath: "fruitApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.DEV
      ? "/api/" // optional: dev proxy or local server
      : API_URL, // production full URL
  }),
  endpoints: (builder) => ({
    getAllFruits: builder.query<IFruit[], void>({
      query: () =>
        import.meta.env.DEV
          ? "fruit/all" // dev proxy route
          : "/all", // production full URL
      // Transform the response to include Wikipedia links
      async transformResponse(rawFruits: IFruit[]) {
        const fetchWikiLink = async (name: string) => {
          try {
            const res = await fetch(
              `${WIKI_API_URL}?action=query&list=search&srsearch=${encodeURIComponent(
                name
              )}&format=json&origin=*`
            );

            const data = await res.json();

            if (data.query.search.length > 0) {
              const pageTitle = data.query.search[0].title;
              return `https://en.wikipedia.org/wiki/${encodeURIComponent(
                pageTitle
              )}`;
            }
          } catch (err) {
            console.error("Wiki fetch error:", err);
          }
          return null;
        };

        // Add wiki link to each fruit
        const fruitsWithWiki = await Promise.all(
          rawFruits.map(async (fruit) => ({
            ...fruit,
            wikiLink: (await fetchWikiLink(fruit.name)) || "",
          }))
        );

        return fruitsWithWiki;
      },
    }),
  }),
});

export const { useGetAllFruitsQuery } = fruitApi;
