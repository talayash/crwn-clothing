import  { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
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
        <div className='navigation'>
            <Link className='logo-containter' to='/'>
              <CrwnLogo className='logo' />
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                  Shop
                </Link>
                {
                    currentUser ? (<span onClick={signOutUser} className='nav-link'>Sign Out</span>) : (<Link className='nav-link' to='/auth'>Sign In</Link>)
                }
                <CartIcon />
            </div>
            {isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
      </Fragment>
    );
  };
export default Navigation;