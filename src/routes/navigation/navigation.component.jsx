import  { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
    return (
      <Fragment>
        <div className='navigation'>
            {/* Logo */}
            <Link className='logo-containter' to='/'>
              <CrwnLogo className='logo' />
            </Link>
            {/* Navigation Links */}
            <div className='nav-links-container'>
                {/* Shop */}
                <Link className='nav-link' to='/shop'>
                  Shop
                </Link>

                {/* Sign In */}
                <Link className='nav-link' to='/auth'>
                  Sign In
                </Link>
            </div>
        </div>
        <Outlet />
      </Fragment>
    );
  };
  export default Navigation;