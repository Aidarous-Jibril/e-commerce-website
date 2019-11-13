import React, {useState} from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/FormInput';
import CustomButton from '../../sharing-custom.button/CustomButton';
import './signIn.styles.scss';

import { googleSignInStart, emailSignInStart } from '../../../redux/user/userActions';


function SignIn ({googleSignInStart, emailSignInStart}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    //submit
   const  onSubmit = async event => {
      event.preventDefault();
      emailSignInStart(email, password);

      //reset form
      setEmail('');
      setPassword('');
    };
  

      return (
        <div className='sign-in'>
          <h2 className='title'>I already have an account</h2>
          <span className='span'>Sign in with your email and password</span>
  
          <form onSubmit={onSubmit}>
            <FormInput
              name='email'
              type='email'
              onChange={e => setEmail(e.target.value)}
              value={email}
              label='Email'
              required
            />
            <FormInput
              name='password'
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              label='Password'
              required
            />
            <div className='buttons'>
              <CustomButton type='submit'> Sign in </CustomButton>
              <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn >
                Sign in with Google
              </CustomButton>
            </div>
          </form>
        </div>
      );

  }

  const mapDispatchToProps = dispatch => ({
    googleSignInStart : () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});
  
  export default connect(null, mapDispatchToProps)(SignIn);