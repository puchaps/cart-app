import {
  ADD_COLLECTIONS_SUCCESS,
  ADD_COLLECTIONS_FAILED,
  ENLARGE_QUANTITY_CHOSEN_ITEM,
  REDUCING_QUANTITY_CHOSEN_ITEM,
  REMOVE_CHOSEN_ITEM,
  TOGGLE_LOADER,
} from "./types/cart.types";

import {
  enlargeQuantityItem,
  reducingQuantityItem,
  removeItemFromCollections,
} from "./utils/cart.utils";

const INITIAL_STATE = {
  collections: null,
  loader: false,
  error: null,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        error: null,
      };
    case ADD_COLLECTIONS_FAILED:
      return {
        ...state,
        collections: null,
        error: action.payload,
      };
    case TOGGLE_LOADER:
      return {
        ...state,
        loader: !state.loader,
      };
    case ENLARGE_QUANTITY_CHOSEN_ITEM:
      return {
        ...state,
        collections: enlargeQuantityItem(state.collections, action.payload),
      };
    case REDUCING_QUANTITY_CHOSEN_ITEM:
      return {
        ...state,
        collections: reducingQuantityItem(state.collections, action.payload),
      };
    case REMOVE_CHOSEN_ITEM:
      return {
        ...state,
        collections: removeItemFromCollections(
          state.collections,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
