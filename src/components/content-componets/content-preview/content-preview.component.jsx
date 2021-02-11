import { connect } from "react-redux"

import "./content-preview.styles.scss"

import {
  selectorCollections,
  selectorTotalPrice,
} from "../../../redux/reducers/cart/selectors/cart.selector"
import ContentItem from "../content-item/content-item.component"

const ContentPreview = ({ collections, totalPrice }) => (
  <div className="content-preview">
    {collections.map((item) => (
      <ContentItem key={item.id} item={item} />
    ))}
    <div className="content-total-price">TOTAL: ${totalPrice}</div>
  </div>
)

const mapStateToProps = (state) => ({
  collections: selectorCollections(state),
  totalPrice: selectorTotalPrice(state),
})

export default connect(mapStateToProps)(ContentPreview)
