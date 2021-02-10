import { connect } from 'react-redux';

import './content-preview.styles.scss';

import { selectorCollections } from '../../../redux/reducers/cart/selectors/cart.selector';
import ContentItem from '../content-item/content-item.component';

const ContentPreview = ({ collections }) => {
  
  return (
    <div className="content-preview">
      {
        collections.map( item => <ContentItem key = {item.id} item = {item}/>)
      }
    </div>
  );
};

const mapStateToProps = state => ({
  collections: selectorCollections(state)
});

export default connect(
  mapStateToProps
)(ContentPreview);