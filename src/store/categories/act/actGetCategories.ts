import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";
type TResponse = {
  id: number;
  title: string;
  prefix: string;
  img: string | null;
}[];
const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TResponse>("/categories");
      const categories = response.data;
      console.log({ categories });
      return categories;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("Unexpected Error!");
      }
    }
  }
);

export default actGetCategories;
