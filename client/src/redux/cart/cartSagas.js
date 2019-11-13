import  { takeLatest, all, call, put } from 'redux-saga/effects';
import { SIGN_OUT_SUCCESS } from '../actions/types';
import  { clearCartItems } from  './cartActions';


export function* clearCartWhenUserSignsOut(){
    yield put(clearCartItems());
}

//Listen action and call clearCartWhenUserSignsOut function which clears cart items by calling clearCartItems
export function* onClearCartItems(){
    yield takeLatest(SIGN_OUT_SUCCESS, clearCartWhenUserSignsOut)
}

//Combine all cart sagas
export function* cartSagas(){
    yield all([ call(onClearCartItems) ])
}