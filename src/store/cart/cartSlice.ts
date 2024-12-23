import { createSelector, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "@customTypes/product";
import { RootState } from "@store/store";

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

// Selector to get the total number of items in the cart
export const selectTotalNumberOfItemsInCart = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    return Object.values(items).reduce(
      (total, quantity) => total + quantity,
      0
    );
  }
);

export const { addItemToCart } = cartSice.actions;
export default cartSice.reducer;
