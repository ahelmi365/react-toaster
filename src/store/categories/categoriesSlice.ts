import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import actGetCategories from "./act/actGetCategories";
import { ICategory } from "@customTypes/category";
import { TLoading } from "@customTypes/shared";

export interface ICategoriesState {
  records: ICategory[];
  loading: TLoading;
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
