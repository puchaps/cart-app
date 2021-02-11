import {
  ADD_GETED_COLLECTIONS_FAILED,
  ADD_GETED_COLLECTIONS_SUCCSES,
  INCREASIN_QUANTITRY_CHOOSED_ITEM,
  REDUCING_QUANTITRY_CHOOSED_ITEM,
  REMOVE_CHOOSED_ITEM,
  TOGGLE_LOADER,
} from "./types/cart.types"

import {
  increasinQuantityChoosedItem,
  reducingQuantityChoosedItem,
  removeChoosedItemFromCllections,
} from "./utils/cart.utils"

const INITIAL_STATE = {
  collections: null,
  loader: false,
  error: null,
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_GETED_COLLECTIONS_SUCCSES:
      return {
        ...state,
        collections: action.payload,
        error: null,
      }
    case ADD_GETED_COLLECTIONS_FAILED:
      return {
        ...state,
        collections: null,
        error: action.payload,
      }
    case TOGGLE_LOADER:
      return {
        ...state,
        loader: !state.loader,
      }
    case INCREASIN_QUANTITRY_CHOOSED_ITEM:
      return {
        ...state,
        collections: increasinQuantityChoosedItem(
          state.collections,
          action.payload
        ),
      }
    case REDUCING_QUANTITRY_CHOOSED_ITEM:
      return {
        ...state,
        collections: reducingQuantityChoosedItem(
          state.collections,
          action.payload
        ),
      }
    case REMOVE_CHOOSED_ITEM:
      return {
        ...state,
        collections: removeChoosedItemFromCllections(
          state.collections,
          action.payload
        ),
      }
    default:
      return state
  }
}

export default cartReducer
