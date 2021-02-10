import { createSelector } from "reselect";

const selectorCart = state => state.cart;

export const selectorCollections = createSelector(
  [selectorCart],
  (cart) => cart.collections ? cart.collections : []
);

export const selectorLoader = createSelector(
  [selectorCart],
  (cart) => cart.loader
);

export const selectorQuantityItemsCollections = createSelector(
  [selectorCollections],
  (collections) => {
    return collections ? collections.reduce((initialValue, item) => initialValue + item.quantity, 0) : [] 
  }
);