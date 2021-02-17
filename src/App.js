import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";

import getCollectionsHatsThunk from "./redux/reducers/cart/thunks/cart.thunks";
import { selectorLoader } from "./redux/reducers/cart/selectors/cart.selector";

import ContentPreview from "./components/content-components/content-preview/content-preview.component";
import Footer from "./components/footer-components/footer/footer.component";
import Header from "./components/header-components/header/header.component";
import Loader from "./components/loader/loader.component";

const App = ({ onGetCollectionHats, onLoader }) => {
  const handleGetCollections = useCallback(() => {
    onGetCollectionHats();
  }, [onGetCollectionHats]);

  useEffect(() => {
    handleGetCollections();
  }, [handleGetCollections]);

  if (onLoader) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <ContentPreview />
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  onLoader: selectorLoader(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGetCollectionHats: () => dispatch(getCollectionsHatsThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
