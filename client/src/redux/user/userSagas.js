import { takeLatest, call, all, put } from 'redux-saga/effects';

import {auth, googleProvider, createUserProfileDocument, getCurrentUserSession} from '../../firebase/Firebase.Utils';

//import this action seperately bcz yield put(fetchCollectionsStart) can't be called inside takeEvery
import { 
    GOOGLE_SIGN_IN_START,
    EMAIL_SIGN_IN_START,
    CHECK_USER_SESSION,
    SIGN_OUT_START,
    SIGN_UP_START,
    SIGN_UP_SUCCESS
} from '../actions/types';

 import {
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure,
    signUpSuccess,
    signUpFailure
 } from './userActions';


 //Sharing func which consize the code for signInWithGoogle/Email, isUserAuthenticated $ signUp $ singInAftersignUp(passes addtionalData as) functions
  export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
      const userRef = yield call( createUserProfileDocument, userAuth, additionalData );
      const userSnapshot = yield userRef.get();
      yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
      yield put(signInFailure(error));
    }
  }
  
//perform signInWithGoogle
 export function* signInWithGoogle() {
    try {
        //destruct user from user object's data
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error.message))
    }
 }

 //Whole action ojbect catched with takeLatest passed into signWithEmailAndPassword, but pulling out email n password
 //perform signWithEmailAndPassword
 export function* signInWithEmailAndPassword({payload}){
   //pull out email, password from payload which is passed in from signIn comp form
    const { email, password} = payload
    try {
        //destruct user from user objects data
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error))
    }
}



//Perfoms user session persist
export function* isUserAuthenticated() {
    try {
      const userAuth = yield getCurrentUserSession();
      if (!userAuth) return;
      yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
      yield put(signInFailure(error));
    }
  }

//Perform Sign Out
export function* signOut(){
  try {
    yield auth.signOut();
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailure(error))
  }
}

//Pull out email, password, displayName from payload (userCredentials)
  export function* signUp({ payload: { email, password, displayName } }) {
    try {
      const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    //pass user $ additionalData into signUpSuccess SIGN_UP_SUCCESS action
    yield put(signUpSuccess({user, additionalData: { displayName} }))
  } catch (error) {
    yield put(signUpFailure(error))
  }
}
//{payload: {user, additionalData} passed into above signUpSuccess action
 export function* signInAfterSignUp({payload: {user, additionalData}}){
    yield yield getSnapshotFromUserAuth(user, additionalData);
 }



// yield put(fetchCollectionsStart()); can't be called inside yield takeEvery
//Listen GOOGLE_SIGN_IN_START Action
export function* onGoogleSignInStart(){
    yield takeLatest( GOOGLE_SIGN_IN_START, signInWithGoogle )
}

//Listen EMAIL_SIGN_IN_START Action
export function* onEmailSignInStart(){
    yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmailAndPassword)
}

//Listen CHECK_USER_SESSION ,  user session persist
export function* onCheckUserSession(){
    yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated)
}

//Listen SING_OUT_START Action
export function* onSignOut(){
  yield takeLatest(SIGN_OUT_START, signOut)
}


//Listen SING_UP_START Action
export function* onSingUpStart(){
  yield takeLatest(SIGN_UP_START, signUp)
}
//Listen SING_UP_SUCCESS Action
export function* onSingUpSuccess(){
  yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp)
}


//Combine All users sagas 
export function* userSagas(){
    yield all([ 
      call(onGoogleSignInStart), 
      call(onEmailSignInStart), 
      call(isUserAuthenticated),
      call(onSignOut),
      call(onSingUpStart),
      call(onSingUpSuccess)
   ])
}