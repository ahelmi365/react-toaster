import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICategory } from "@customTypes/category";
import axios, { isAxiosError } from "axios";

const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<ICategory[]>("/categories");
      const categories = response.data;
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
