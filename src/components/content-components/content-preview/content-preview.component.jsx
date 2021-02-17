import React from "react";

import { connect } from "react-redux";

import "./content-preview.styles.scss";

import {
  selectorCollections,
  selectorTotalPrice,
} from "../../../redux/reducers/cart/selectors/cart.selector";

import ContentItem from "../content-item/content-item.component";

const ContentPreview = ({ onCollections, onTotalPrice }) => (
  <div className="content-preview">
    {
      onCollections.map((item) => (
        <ContentItem key={item.id} item={item} />
      ))
    }
    <div className="content-total-price">TOTAL: ${onTotalPrice}</div>
  </div>
);

const mapStateToProps = (state) => ({
  onCollections: selectorCollections(state),
  onTotalPrice: selectorTotalPrice(state),
});

export default connect(mapStateToProps)(ContentPreview);
