import {
    FETCH_COLLECTIONS_START, 
    FETCH_COLLECTIONS_SUCCESS, 
    FETCH_COLLECTIONS_FAILURE 
} from '../actions/types'


const INITIAL_STATE = {
    collections: null,
    isLoading: false,
    errorMessages: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_COLLECTIONS_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_COLLECTIONS_SUCCESS : 
            return {
                ...state,
                collections: action.payload,
                isLoading: false
            }   
        case FETCH_COLLECTIONS_FAILURE: {
            return {
                ...state,
                errorMessages: action.payload
            }
        }     
        default:
            return state
    }
}

export default shopReducer;