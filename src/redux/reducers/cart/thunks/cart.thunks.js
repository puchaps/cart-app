import {
  converdGetedSnapShotCollection,
  getSnapShotCollectionFromFirestore
} from "../../../../firebase/firebase";

import {
  addGetedCollectionsFailedAC,
  addGetedCollectionsSuccsesAC,
  toggleLoaderAC
} from "../actions/cart.actions";

export const setGetedCollectionsHatsThunk = () => {
  return async (dispatch) => {
    try {
      dispatch(toggleLoaderAC());

      const snapShotHats = await getSnapShotCollectionFromFirestore()
      const converdCollectionsHats = await converdGetedSnapShotCollection(snapShotHats);

      dispatch(addGetedCollectionsSuccsesAC(converdCollectionsHats));

      dispatch(toggleLoaderAC());
    } catch(error) {
      dispatch(addGetedCollectionsFailedAC(error.messages));
    }
  };
};
