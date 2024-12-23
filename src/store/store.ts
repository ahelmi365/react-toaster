import { combineReducers, configureStore } from "@reduxjs/toolkit";
// persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// reducer
import categoriesSlice from "./categories/categoriesSlice.ts";
import productsSlice from "./products/productsSlice.ts";
import cartSlice from "./cart/cartSlice.ts";

//  persist config
const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"],
};

const rootReducer = combineReducers({
  categories: categoriesSlice,
  products: productsSlice,
  cart: cartSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
});
const presistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { store, presistor };
