import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as YlpLogo } from '../../assets/icons/logo.svg';
import './navi.styles.scss';
function Navi() {
    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
              <YlpLogo className='logo'/>
            </Link>
          
          <div className='nav-links-container'>
            <Link className='nav-link' to='/store'>
                STORE
            </Link>
            <Link className='nav-link' to='/sign-in'>
                SIGN IN
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navi