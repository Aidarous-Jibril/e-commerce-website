import {
    GOOGLE_SIGN_IN_START,
    EMAIL_SIGN_IN_START,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    CHECK_USER_SESSION,
    SIGN_OUT_START,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_FAILURE,
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE

} from '../actions/types'


//FOR GOOGLE SIGN IN ACTIONS
// No dispatch here, googleSignInStart actions dispatched from singIn com
  export const googleSignInStart = () => {
    return {
        type: GOOGLE_SIGN_IN_START
    };
  };

  //FOR EMAIL SING IN ACTIONS
  export const emailSignInStart = emailAndPassword => {
    return {
      type: EMAIL_SIGN_IN_START,
      payload: emailAndPassword
    }
}

//for both google and email signin
  export const signInSuccess = user => {
    return {
        type: SIGN_IN_SUCCESS,
        payload: user
    }    
  }  

//for both google and email signin
  export const signInFailure = error => {
    return {
        type: SIGN_IN_FAILURE,
        payload: error
    }    
  }    




  //check user session action
  export const checkUserSession = () => {
    return {
      type: CHECK_USER_SESSION
    }
  }

  //SignOut Start action
  export const signOutStart = () => {
    return {
      type: SIGN_OUT_START
    }
  }
  //SignOut Success action
  export const signOutSuccess = () => {
    return {
      type: SIGN_OUT_SUCCESS
    }
  }

//SignOut Failure action
export const signOutFailure = error => {
  return {
    type: SIGN_OUT_FAILURE,
    payload: error
  }
}

//Sign Up Start
export const signUpStart = userCredentials => {
  return {
    type: SIGN_UP_START,
    payload: userCredentials
  }
}

//Sign Up Success
export const signUpSuccess = ({user, additionalData}) => {
  return {
    type: SIGN_UP_SUCCESS,
    payload: {user, additionalData}
  }
}

//Sign Up Error
export const signUpFailure = error => {
  return {
    type: SIGN_UP_FAILURE,
    payload: error
  }
}