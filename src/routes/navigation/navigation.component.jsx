import  { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { UserContext } from "../../context/user.context";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
import { signOutUser } from '../../utils/firebase/firebase.utils';

// Navigation Component
const Navigation = () => {
    // Initialize current user that logged in from context
    const { currentUser  } = useContext(UserContext);

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
            </div>
        </div>
        <Outlet />
      </Fragment>
    );
  };
export default Navigation;