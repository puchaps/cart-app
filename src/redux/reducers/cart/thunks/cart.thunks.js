/* eslint-disable no-debugger */
import {
  getSnapShotCollection,
  getSnapShotCollectionFromDB,
} from "../../../../firebase/firebase";

import {
  addCollectionsSuccessAC,
  addCollectionsFailedAC,
  toggleLoaderAC,
} from "../actions/cart.actions";

const getCollectionsHatsThunk = () => async (dispatch) => {
  try {
    dispatch(toggleLoaderAC());

    const snapShotHats = await getSnapShotCollectionFromDB();
    const transformCollectionsHats = await getSnapShotCollection(snapShotHats);
    
    dispatch(addCollectionsSuccessAC(transformCollectionsHats));

    dispatch(toggleLoaderAC());
  } catch (error) {
    dispatch(addCollectionsFailedAC(error.messages));
  }
};

export default getCollectionsHatsThunk;
