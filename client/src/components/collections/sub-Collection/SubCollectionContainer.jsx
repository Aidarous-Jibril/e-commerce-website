import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../../redux/shop/shopSelectors';
import WithSpinner from '../../collections/spinner/With-Spinner';
import SubCollection from './SubCollection';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

//SubCollectionContainer HOC takes in two comp WithSpinner and Subcollection, and gets isLoading from shopSellector
const SubCollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(SubCollection);

export default SubCollectionContainer;

