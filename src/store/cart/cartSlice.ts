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
      const itemIsExist = state.items[action.payload];
      if (itemIsExist) {
        state.items[action.payload] += 1;
      } else {
        state.items[action.payload] = 1;
      }
    },
  },
});

export const { addItemToCart } = cartSice.actions;
export default cartSice.reducer;
