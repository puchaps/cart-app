import React, { useCallback, useEffect } from "react"
import { connect } from "react-redux"

import setGetedCollectionsHatsThunk from "./redux/reducers/cart/thunks/cart.thunks"
import { selectorCollections, selectorLoader } from "./redux/reducers/cart/selectors/cart.selector"

import ContentPreview from "./components/content-componets/content-preview/content-preview.component"
import Footer from "./components/footer-components/footer/footer.component"
import Header from "./components/header-components/header/header.component"
import Loader from "./components/loader/loader.component"

const App = ({ setCollectionHats, loader }) => {
  const wrapperFunc = useCallback(() => {
    setCollectionHats();
  }, [setCollectionHats])

  useEffect(() => {
    wrapperFunc();
  }, [wrapperFunc])

  if (loader) {
    return <Loader />
  }

  return (
    <>
      <Header />
      <ContentPreview />
      <Footer />
    </>
  )
}

const mapStateToProps = (state) => ({
  loader: selectorLoader(state),
  collections: selectorCollections(state)
})

const mapDispatchToProps = (dispatch) => ({
  setCollectionHats: () => dispatch(setGetedCollectionsHatsThunk()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
