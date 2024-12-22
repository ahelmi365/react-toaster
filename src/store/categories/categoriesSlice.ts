import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICategory {
  id: number;
  title: string;
  prefix: TCategoryPrefix;
  img: string | null;
}
type TCategoryPrefix = "men" | "women" | "baby" | "sport";

interface ICategoriesState {
  records: ICategory[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: null;
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
});

export const {} = categoriesSlice.actions;
export default categoriesSlice.reducer;
