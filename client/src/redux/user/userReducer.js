import {
    SET_CURRENT_USER,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_FAILURE,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE
} from '../actions/types'

const INITIAL_STATE = {
    currentUser: null,
    errors: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state, 
                currentUser: action.payload,
                errors: null
            }
        case SIGN_IN_SUCCESS:
        case SIGN_UP_SUCCESS:    
            return {
                ...state,
                currentUser: action.payload
            }
        case SIGN_OUT_SUCCESS:
            return {
                currentUser: null,
                errors: null
            }
        case SIGN_IN_FAILURE:
        case SIGN_OUT_FAILURE:
        case SIGN_UP_FAILURE:
            return {
                ...state,
                errors: action.payload
            }
        default:
            return state;    
    }
}

export default userReducer;