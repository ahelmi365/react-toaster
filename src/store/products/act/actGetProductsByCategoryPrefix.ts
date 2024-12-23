import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct } from "@customTypes/product";
import axios, { isAxiosError } from "axios";

const actGetProductsByCategoryPrefix = createAsyncThunk(
  "products/actGetProductsByCategoryPrefix",
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<IProduct[]>(
        `/products?cat_prefix=${prefix}`
      );
      const products = response.data;
      return products;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("Unexpected Error!");
      }
    }
  }
);

export default actGetProductsByCategoryPrefix;
