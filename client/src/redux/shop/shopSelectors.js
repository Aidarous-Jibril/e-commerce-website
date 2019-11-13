
import { createSelector } from 'reselect';



//TWO TYPES OF SELECTOR FOR MEMOIZATION VALUE
//this is input selector, it not uses state, it gives back a piece of state
const selectShop = state => state.shop;

export const selectShopCollections =  createSelector(
    [selectShop],
    shop => shop.collections
);

//Now collections data is an object of objects, to convert an array we need to use Object.keys so that our OverviewCollection can render
export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);


//selectCollectionMatch func which  passed into SubCollection takes collectionUrlParam parameter(collectionId) comes frm ShopPage->SubCollection comp, and it's for nested routing
  export const selectCollectionUrlMatch = collectionUrlParam =>
  createSelector(
    [selectShopCollections],
      collections => (collections ? collections[collectionUrlParam] : [])
  );

    //If its Loading
  export const selectIsCollectionLoading = createSelector(
    [selectShop],
    shop => shop.isLoading
  );

//This check if Collection is not loaded (null) or not. !!shop.collections returns false means null
  export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
  );
  