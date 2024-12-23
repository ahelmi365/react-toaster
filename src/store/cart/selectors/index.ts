import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/store";

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
