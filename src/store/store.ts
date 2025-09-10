import { configureStore } from "@reduxjs/toolkit";

import { fruitApi } from "../services/fruitApi";

export const store = configureStore({
  reducer: {
    [fruitApi.reducerPath]: fruitApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fruitApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
