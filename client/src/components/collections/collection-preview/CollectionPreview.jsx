import React from 'react'
import { withRouter } from 'react-router-dom';

import CollectionItems from '../collection-items/CollectionItems'

import './collectionPreview.styles.scss'

const CollectionPreview = ({ title, items, history, match, routeName }) => (
    <div className='collection-preview'>

      <div className='title'  onClick={() => history.push(`${match.path}/${routeName}`)}>
        {title.toUpperCase()}
      </div>

      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItems key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
  
  //Pass withRouter In order nested route works 
  export default withRouter(CollectionPreview);