import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as YlpLogo } from '../../assets/icons/logo.svg';
import './navi.styles.scss';

import { UserContext } from '../../context/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'


function Navi() {
  const { curentUser } = useContext(UserContext)


  console.log(curentUser);
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
            {
              curentUser ? (
                <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>)
                : ( <Link className='nav-link' to='/auth'>
                     SIGN IN
                   </Link>
                
              )
            }
            
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navi