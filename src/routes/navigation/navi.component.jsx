import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as YlpLogo } from '../../assets/icons/logo.svg';
import CartIcon from '../../components/cart/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart/cart-dropdown/cart-dropdown.component'

import { UserContext } from '../../context/user.context'
import { CartContext } from '../../context/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils'

import { 
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
 } from './navi.styles';

function Navi() {
  const { curentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)


  console.log(curentUser);
    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
              <YlpLogo className='logo'/>
            </LogoContainer>
          
          <NavLinks>
            <NavLink to='/store'>
                STORE
            </NavLink>
            {
              curentUser ? (
                <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>)
                : ( <NavLink as='span' to='/auth'>
                     SIGN IN
                   </NavLink>
                
              )
            }
            <CartIcon />
            
          </NavLinks>
          {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
  }

  export default Navi