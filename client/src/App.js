import React, {useEffect} from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import  M from 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { checkUserSession } from './redux/user/userActions';

import Header from './components/pages/header/Header';
import HomePage from './components/pages/homepage-folder/HomePage';
import ShopPage from './components/pages/shop/ShopPage';
import ContactPage from './components/pages/contact-page/ContactPage';
import SignInAndSignUpPage from './components/sign-in-And-sign-up/sign-in-And-sign-up/SignInAndSignUp'
import CheckOutPage from './components/pages/check-Out/CheckOutPage';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';

//Global styles
import {GlobalStyle } from './Global.styles';


const App = ({currentUser}) => {
  //unsubscribeFromAuth = null;
   
  useEffect(() => {
    //this materialize js init to use alert msg
      M.AutoInit();
      checkUserSession();
    }, []);

      return (
        <div className='App'>
          <GlobalStyle />
          <BrowserRouter>
            <Header />
            <ErrorBoundary>
              <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route path='/contact' component={ContactPage} />
                <Route exact path='/signin' 
                  render={ ()=> currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />) } 
                />
                <Route path='/checkout' component={CheckOutPage} />
              </Switch>
            </ErrorBoundary>  
          </BrowserRouter>
        </div>
    )
  
}


const mapStateToProps = ({user: {currentUser}}) => ({
  currentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession : () => dispatch(checkUserSession())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
