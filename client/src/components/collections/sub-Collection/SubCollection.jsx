
import React from 'react'
import { connect } from 'react-redux';

import './subCollection.styles.scss';

import CollectionItems from '../collection-items/CollectionItems';
//import Spinner from '../spinner/Spinner';

import { selectCollectionUrlMatch } from '../../../redux/shop/shopSelectors'

const SubCollection = ({ collection }) => {
  const { title, items } = collection;

console.log(collection)
    return (
        <div className='sub-collection-page'>

        <h2 className='title'>{title}</h2>
        <div className='items'>
            { items.map(item => (
            <CollectionItems key={item.id} item={item} />
            )) }
        </div>
        </div>
    );
    }


//selectCollectionMatch is to match for nested routing
  const mapStateToProps = (state, ownProps) => ({
    collection: selectCollectionUrlMatch(ownProps.match.params.collectionId)(state),
  });
export default connect(mapStateToProps)(SubCollection);


/*
import React from 'react';
import { connect } from 'react-redux';

import CollectionItems from '../collection-preview-items/CollectionItems';
import { selectCollectionUrlMatch } from '../../../redux/shop/shopSelectors'

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './subCollection.styles';

const SubCollection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItems key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollectionUrlMatch(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(SubCollection);
*/