import { connect } from 'react-redux';

import './content-item.styles.scss';

import { 
  increasinQuantityChoosedItemAC,
  reducingQuantityChoosedItemAC,
  removeChoosedItemAC
} from '../../../redux/reducers/cart/actions/cart.actions';

const ContentItem = ({ item,removeChoosedItem, increasinChoosedItem, reducingChoosedItem }) => {
  const{ id, name, imageUrl, price, quantity } = item;

  return (
    <div className="content-item">
      <div className="content-image">
        <img src={imageUrl} alt="hat"/>
      </div>
      <div className="content-name">
        {name}
      </div>
      <div className="content-price">
        {price}
      </div>
      <div className="content-quantity">
        <div className="quantity-reducing" onClick = {() => reducingChoosedItem(item)}>
          &#171;
        </div>
        <div className="quantity">
          {quantity}
        </div>
        <div className="quantity-increasing" onClick = {() => increasinChoosedItem(id)}>
          &#187;
        </div>
      </div>
      <div className="content-remove" onClick = {() => removeChoosedItem(id)}>
        &#10006;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeChoosedItem: (id) => dispatch(removeChoosedItemAC(id)),
  increasinChoosedItem: (id) => dispatch(increasinQuantityChoosedItemAC(id)),
  reducingChoosedItem: (id) => dispatch(reducingQuantityChoosedItemAC(id))
});

export default connect(
  null,
  mapDispatchToProps
)(ContentItem);