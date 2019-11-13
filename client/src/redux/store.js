import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
//import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';  //this is for storage
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares =  [sagaMiddleware];

//for deploying
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }
//extantiate store middleware
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// saga middleware 
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);



//export default (store, persistor);
export default { store, persistor };