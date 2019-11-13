import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../../assets/Logo.svg'

import './header.styles.scss';

import { connect } from  'react-redux';
import CartIcon from '../../cart-icon/CartIcon';
import CartDropdown from '../../cart-dropdown/CartDropdown';

import { signOutStart } from '../../../redux/user/userActions';

const Header = ({currentUser, hidden, signOutStart}) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>

            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                {currentUser ?
                    (<div className='option' onClick={signOutStart} > SING OUT</div> ) :
                    ( 
                    <Link className='option' to='/signIn'> SIGN IN</Link>)
                }
                
                <CartIcon />
            </div>
            { hidden ? null : <CartDropdown /> }
            
        </div>    
    )
}

/*
const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
})
*/
//destructure  properties inside mapStateToProps
const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})


const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})
export default connect(mapStateToProps, mapDispatchToProps) (Header)
