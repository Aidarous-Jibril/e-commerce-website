import React, {useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../collections/collection-overview/CollectionOverview';
import SubCollectionContainer from '../../collections/sub-Collection/SubCollectionContainer'

import { fetchCollectionsStart } from '../../../redux/shop/shopActions' 


const ShopPage = ({ match, fetchCollectionsStart }) =>{
  useEffect(() => {
    fetchCollectionsStart();
    //eslint-disable-next-line
  }, [])

  return (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionOverview}  />
    <Route
          path={`${match.path}/:collectionId`}
          component={SubCollectionContainer}
        />
  </div>
);
}

//send action direct from comp in useEffect
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()) 
})
export default connect(null, mapDispatchToProps)(ShopPage);
