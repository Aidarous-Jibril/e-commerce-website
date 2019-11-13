import React from 'react'
import { connect } from 'react-redux';

import CollectionPreview from '../collection-preview/CollectionPreview'
import Spinner from '../spinner/Spinner';

//COMES FROM SELECTOR
import { selectCollectionsForPreview, selectIsCollectionLoading } from '../../../redux/shop/shopSelectors'
import { createStructuredSelector } from 'reselect';


const CollectionOverview = ({collections, isCollectionLoading}) => {
    if (isCollectionLoading || collections === null) {
        return <Spinner />
      }
    return (
        <div className='collection-overview'>
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
    isCollectionLoading: selectIsCollectionLoading
}) 
  export default connect(mapStateToProps)(CollectionOverview);
