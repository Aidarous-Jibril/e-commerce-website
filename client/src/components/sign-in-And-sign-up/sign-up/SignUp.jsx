import React, {useState} from 'react';
import  {connect} from 'react-redux';
import FormInput from '../form-input/FormInput'
import CustomButton from '../../sharing-custom.button/CustomButton'
import './signUp.styles.scss';

import { signUpStart } from '../../../redux/user/userActions';


function SignUp ({signUpStart}) {
 //instead of having 4 different states we can simply have one state 'contact
 const [user, setUser] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
});

    //pulling out values from user
    const {displayName, email, password, confirmPassword} = user

    //onChange,  //without spreading user '...user' will cause error
    const onChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value})
    }

    //onSubmit
    const onSubmit = async event => {
      event.preventDefault();
      
      if (password !== confirmPassword) {
        alert("passwords don't match");
        return;
      }
      //Pass values as object into signUpStart action
      signUpStart({ displayName, email, password })
      
      //Reset form
      setUser({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    };
  

  

      return (
        <div className='sign-up'>
          <h2 className='title'>I do not have a account</h2>
          <span className='span'>Sign up with your email and password</span>
          <form className='sign-up-form' onSubmit={onSubmit}>
            <FormInput
              type='text'
              name='displayName'
              value={displayName}
              onChange={onChange}
              label='Display Name'
              required
            />
            <FormInput
              type='email'
              name='email'
              value={email}
              onChange={onChange}
              label='Email'
              required
            />
            <FormInput
              type='password'
              name='password'
              value={password}
              onChange={onChange}
              label='Password'
              required
            />
            <FormInput
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={onChange}
              label='Confirm Password'
              required
            />
            <div className='button'>
              <CustomButton type='submit'>SIGN UP</CustomButton>
            </div>  
          </form>
        </div>
      );
    
  }
  
  const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
  })

  export default connect(null, mapDispatchToProps)(SignUp);