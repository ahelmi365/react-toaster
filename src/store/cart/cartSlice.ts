import { IProduct } from "@customTypes/product";
import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  items: { [key: string]: number };
  cartItemsFullInfo: IProduct[];
}
const initialState: CartState = {
  items: {},
  cartItemsFullInfo: [],
};

const cartSice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const id = action.payload;

      const itemIsExist = state.items[id];

      if (itemIsExist) {
        state.items[id] += 1;
      } else {
        state.items[id] = 1;
      }
    },
  },
});

export const { addItemToCart } = cartSice.actions;
export default cartSice.reducer;
