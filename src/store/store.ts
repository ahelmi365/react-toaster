import { configureStore } from "@reduxjs/toolkit";
// reducer

import categoriesSlice from "./categories/categoriesSlice.ts";
import productsSlice from "./products/productsSlice.ts";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
