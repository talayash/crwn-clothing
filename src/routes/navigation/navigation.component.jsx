import  { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from "./navigation.styles";
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";


// Navigation Component
const Navigation = () => {
    // Initialize current user that logged in from context
    const { currentUser  } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)

    // Return
    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
              <CrwnLogo className='logo' />
            </LogoContainer>
            <NavLinks>
                <NavLink to='/shop'>
                  Shop
                </NavLink>
                {
                    currentUser ? (<NavLink as='span' onClick={signOutUser} >Sign Out</NavLink>) : (<NavLink to='/auth'>Sign In</NavLink>)
                }
                <CartIcon />
            </NavLinks>
            {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    );
  };
export default Navigation;