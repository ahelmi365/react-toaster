import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import actGetCategories from "./act/actGetCategories";

export interface ICategory {
  id: number;
  title: string;
  prefix: TCategoryPrefix;
  img: string | null;
}
type TCategoryPrefix = "men" | "women" | "baby" | "sport";

interface ICategoriesState {
  records: ICategory[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}
const initialState: ICategoriesState = {
  records: [],
  loading: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(actGetCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    }),
      builder.addCase(actGetCategories.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.error = null;
        state.records = action.payload;
      }),
      builder.addCase(actGetCategories.rejected, (state, action) => {
        state.loading = "failed";
        // state.error = action.error.message || "";
        state.error = action.payload as string;
      });
  },
});

export const {} = categoriesSlice.actions;
export default categoriesSlice.reducer;
