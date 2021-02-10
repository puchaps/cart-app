import { connect } from "react-redux";
import { useEffect } from "react";

import { setGetedCollectionsHatsThunk } from "./redux/reducers/cart/thunks/cart.thunks";
import { selectorLoader } from "./redux/reducers/cart/selectors/cart.selector";

import ContentPreview from "./components/content-componets/content-preview/content-preview.component";
import Footer from "./components/footer-components/footer/footer.component";
import Header from "./components/header-components/header/header.component"
import Loader from './components/loader/loader.component';

const App = ({ setCollectionHats, loader }) => {
  useEffect(() => {
    setCollectionHats();
  }, []);

  if (loader) {
    return <Loader/>
  };
  
  return (
    <>
      <Header/>
      <ContentPreview/>
      <Footer/>
    </>
  );
};

const mapStateToProps = state => ({
  loader: selectorLoader(state)
});

const mapDispatchToProps = dispatch => ({
  setCollectionHats: () => dispatch(setGetedCollectionsHatsThunk())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
