/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

import { connect } from "react-redux";

import "./content-item.styles.scss";

import {
  enlargeQuantityChosenItemAC,
  reducingQuantityChosenItemAC,
  removeChosenItemAC,
} from "../../../redux/reducers/cart/actions/cart.actions";

const ContentItem = ({ item, onRemoveItem, onEnlargeItem, onReducingItem }) => {
  const { id, name, imageUrl, price, quantity } = item;

  return (
    <div className="content-item">
      <div className="content-image">
        <img src={imageUrl} alt="hat" />
      </div>
      <div className="content-name">{name}</div>
      <div className="content-price">{price}</div>
      <div className="content-quantity">
        <div className="quantity-reducing" onClick={() => onReducingItem(item)}>
          &#171;
        </div>
        <div className="quantity">{quantity}</div>
        <div className="quantity-increasing" onClick={() => onEnlargeItem(id)}>
          &#187;
        </div>
      </div>
      <div className="content-remove" onClick={() => onRemoveItem(id)}>
        &#10006;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onRemoveItem: (id) => dispatch(removeChosenItemAC(id)),
  onEnlargeItem: (id) => dispatch(enlargeQuantityChosenItemAC(id)),
  onReducingItem: (id) => dispatch(reducingQuantityChosenItemAC(id)),
});

export default connect(null, mapDispatchToProps)(ContentItem);
