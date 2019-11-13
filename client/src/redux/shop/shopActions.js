import { 
    FETCH_COLLECTIONS_START, 
    FETCH_COLLECTIONS_SUCCESS, 
    FETCH_COLLECTIONS_FAILURE 
} from  '../actions/types';

//import {firestore, convertCollectionsSnapshotToMap } from '../../firebase/Firebase.Utils'

//THESE ACTIONS GOES INTO SHOPSAGA.JS
// fetchCollectionsStart Sets loading to true
export const fetchCollectionsStart = () => {
    return {
      type: FETCH_COLLECTIONS_START
    };
  };
  
  //fetching success
export const fetchCollectionsSuccess = collectionsMap => {
    return {
        type: FETCH_COLLECTIONS_SUCCESS,
        payload: collectionsMap
    }
};

//fetching failed
export const fetchCollectionsFailure = error => {
    return {
        type: FETCH_COLLECTIONS_FAILURE,
        payload: error
    }
};




//WE USE REDUX THUNK MDDLEWARE FOR MULTPLE ACTIONS
/* REDUX-THUNK FETCHING WAY
// fetchCollectionsStart Sets loading to true
export const fetchCollectionsStart = () => {
    return {
        type: FETCH_COLLECTIONS_START
    };
};

  //fetching success
export const fetchCollectionsSuccess = collectionsMap => {
    return {
        type: FETCH_COLLECTIONS_SUCCESS,
        payload: collectionsMap
    }
};

//fetching failed
export const fetchCollectionsFailure = error => {
    return {
        type: FETCH_COLLECTIONS_FAILURE,
        payload: error
    }
};
//fetch data from fb backend then dispatch multiple above Actions
export const fetchCollectionsStartAsync = () => {
    return dispatch => {
      const collectionRef = firestore.collection('collections');
      dispatch(fetchCollectionsStart());
      
      collectionRef
      .get()
        .then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
          dispatch(fetchCollectionsSuccess(collectionsMap));
        })
        .catch(error => dispatch(fetchCollectionsFailure(error.message)));
    };
};
*/



/* MY FETCHING WAY in REDUX
export const fetchCollectionsStartAsync = () =>  dispatch => {
    try {
        dispatch(setLoading());
        const collectionRef = firestore.collection('collections');
    
        collectionRef
        .get()
           .then (snapshot => {
               const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch({
                type: FETCH_COLLECTIONS_SUCCESS,
                payload: collectionsMap
            })
        })        
    } catch (error) {
        dispatch({
            type: FETCH_COLLECTIONS_FAILURE,
            payload: error.message
        })
    }        
};

// Set loading to true
export const setLoading = () => {
    return {
      type: FETCH_COLLECTIONS_START
    };
  };
*/