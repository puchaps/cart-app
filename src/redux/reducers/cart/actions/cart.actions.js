import {
  ADDED_QUANTITY_TO_ITEM,
  ADD_GETED_COLLECTIONS_FAILED,
  ADD_GETED_COLLECTIONS_SUCCSES,
  INCREASIN_QUANTITRY_CHOOSED_ITEM,
  REDUCING_QUANTITRY_CHOOSED_ITEM,
  REMOVE_CHOOSED_ITEM,
  TOGGLE_LOADER
} from "../types/cart.types";

////////////////////--QUANTITY--////////////////////
export const addedQuantityToItemAC = () => ({
  type: ADDED_QUANTITY_TO_ITEM
});
////////////////////--QUANTITY--////////////////////


////////////////////--COLLECTIOS--////////////////////
export const addGetedCollectionsSuccsesAC = (collections) => ({
  type: ADD_GETED_COLLECTIONS_SUCCSES,
  payload: collections
});
export const addGetedCollectionsFailedAC = (error) => ({
  type: ADD_GETED_COLLECTIONS_FAILED,
  payload: error
});
////////////////////--COLLECTIOS--////////////////////


////////////////////--TOGGLE--////////////////////
export const toggleLoaderAC = () => ({
  type: TOGGLE_LOADER
});
////////////////////--TOGGLE--////////////////////


////////////////////--CHANGE-COLLECTIONS--////////////////////
export const removeChoosedItemAC = (choosedItem) => ({
  type: REMOVE_CHOOSED_ITEM,
  payload: choosedItem
});
export const increasinQuantityChoosedItemAC = (choosedItem) => ({
  type: INCREASIN_QUANTITRY_CHOOSED_ITEM,
  payload: choosedItem
});
export const reducingQuantityChoosedItemAC = (choosedItem) => ({
  type: REDUCING_QUANTITRY_CHOOSED_ITEM,
  payload: choosedItem
});
////////////////////--CHANGE-COLLECTIONS--////////////////////