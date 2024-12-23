import { IProduct } from "@customTypes/product";
import { TLoading } from "@customTypes/shared";
import { createSlice } from "@reduxjs/toolkit";

import actGetProductsByCategoryPrefix from "./act/actGetProductsByCategoryPrefix";

interface IProductsState {
  records: IProduct[];
  loading: TLoading;
  error: string | null;
}

const initialState: IProductsState = {
  records: [],
  loading: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    resetProductsRecords: (state) => {
      state.records = [];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(actGetProductsByCategoryPrefix.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });

    builder.addCase(
      actGetProductsByCategoryPrefix.fulfilled,
      (state, action) => {
        state.loading = "succeeded";
        state.error = null;
        state.records = action.payload;
      }
    );

    builder.addCase(
      actGetProductsByCategoryPrefix.rejected,
      (state, action) => {
        state.loading = "failed";
        // state.error = action.error.message || "";
        state.error = action.payload as string;
      }
    );
  },
});

export const { resetProductsRecords } = productsSlice.actions;
export default productsSlice.reducer;
