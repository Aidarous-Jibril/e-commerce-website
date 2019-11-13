import { takeEvery, call, put} from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from  '../../firebase/Firebase.Utils';

//import this action seperately bcz yield put(fetchCollectionsStart) can't be called inside takeEvery
import { 
    FETCH_COLLECTIONS_START 
} from '../actions/types';

//import action functions from shop action
import {
    fetchCollectionsSuccess, fetchCollectionsFailure
} from './shopActions';



export function* fetchCollectionsStartAsync () {
   try {
        const collectionRef = firestore.collection('collections');
        const snabShot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snabShot)
        yield put(fetchCollectionsSuccess(collectionsMap))
   } catch (error) {
        yield put (fetchCollectionsFailure(error.message))
   }
}

// yield put(fetchCollectionsStart()); can't be called inside yield takeEvery, fetchCollectionsStart  is same as in action fetchCollectionsStart
export function* fetchCollectionsStart(){
    yield takeEvery(
        FETCH_COLLECTIONS_START, 
        fetchCollectionsStartAsync
    )
}