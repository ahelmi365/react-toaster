import { IProduct } from "@customTypes/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

const actGetProductsByCategoryPrefix = createAsyncThunk(
  "products/actGetProductsByCategoryPrefix",
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<IProduct[]>(
        `http://localhost:5005/products?cat_prefix=${prefix}`
      );
      const products = response.data;
      console.log({ products });
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
