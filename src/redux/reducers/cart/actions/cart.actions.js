import {
  ADDED_QUANTITY_TO_ITEM,
  ADD_COLLECTIONS_SUCCESS,
  ADD_COLLECTIONS_FAILED,
  ENLARGE_QUANTITY_CHOSEN_ITEM,
  REDUCING_QUANTITY_CHOSEN_ITEM,
  REMOVE_CHOSEN_ITEM,
  TOGGLE_LOADER,
} from "../types/cart.types";

/// /////////////////--QUANTITY--////////////////////
export const addedQuantityToItemAC = () => ({
  type: ADDED_QUANTITY_TO_ITEM,
});
/// /////////////////--QUANTITY--////////////////////

/// /////////////////--COLLECTIONS--////////////////////
export const addCollectionsSuccessAC = (collections) => ({
  type: ADD_COLLECTIONS_SUCCESS,
  payload: collections,
});
export const addCollectionsFailedAC = (error) => ({
  type: ADD_COLLECTIONS_FAILED,
  payload: error,
});
/// /////////////////--COLLECTIONS--////////////////////

/// /////////////////--TOGGLE--////////////////////
export const toggleLoaderAC = () => ({
  type: TOGGLE_LOADER,
});
/// /////////////////--TOGGLE--////////////////////

/// /////////////////--CHANGE-COLLECTIONS--////////////////////
export const removeChosenItemAC = (chooseItem) => ({
  type: REMOVE_CHOSEN_ITEM,
  payload: chooseItem,
});
export const enlargeQuantityChosenItemAC = (chooseItem) => ({
  type: ENLARGE_QUANTITY_CHOSEN_ITEM,
  payload: chooseItem,
});
export const reducingQuantityChosenItemAC = (chooseItem) => ({
  type: REDUCING_QUANTITY_CHOSEN_ITEM,
  payload: chooseItem,
});
/// /////////////////--CHANGE-COLLECTIONS--////////////////////
