import React, {
  useState,
  useContext,
  useCallback,
  useEffect,
  lazy,
  Suspense,
} from 'react';
import avatarPic from '../../assets/VoteAble-header-image-2.png';
import './Header.css';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/icons-material/Menu';
import Context from '../../Context/Context.jsx';
import Menuu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import avatarImg from '../../assets/avatarIcon.jpeg';
import { useNavigate } from 'react-router-dom';

const LazyDropDown = lazy(() => import('../Drop-down/DropDown.jsx'));

const Imgs = {
  avatarPic,
  avatarImg,
};

const Header = React.memo(function Header(props) {
  const ctx = useContext(Context);
  const navigate = useNavigate();
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [banchorEl, setBanchorEl] = React.useState(null);

  const bopen = Boolean(banchorEl);

  const bhandleClick = (event) => {
    setBanchorEl(event.currentTarget);
  };
  const bhandleClose = () => {
    setBanchorEl(null);
  };

  const logout = useCallback(async () => {
    localStorage.removeItem('name');
    localStorage.removeItem('gender');
    localStorage.removeItem('password');
    localStorage.removeItem('class');
    localStorage.removeItem('house');

    setIsLoggedOut(true);
  }, []);

  useEffect(() => {
    if (isLoggedOut) {
      navigate('/login');
    }
    // eslint-disable-next-line
  }, [isLoggedOut]);

  return (
    <div>
      <Suspense fallback={<div></div>}>
        {ctx.isDrop ? <LazyDropDown message={props.message} /> : ''}
      </Suspense>
      <div className="navBar">
        <Menu
          className="Menu"
          style={{ fontSize: '30px' }}
          onClick={() => {
            ctx.setIsDropVal(true);
          }}
        />
        <NavLink to="/home" style={{ height: '50px' }}>
          <img
            src={Imgs.avatarPic}
            alt="header"
            style={{ objectFit: 'contain', height: '50px' }}
          />
        </NavLink>
        {!localStorage.getItem('name') ? (
          <NavLink to="/login" className="popo">
            Login
          </NavLink>
        ) : (
          ''
        )}
        {localStorage.getItem('name') ? (
          <div>
           <NavLink
              to="/polls"
              className='btnn'
                style={{ textDecoration: 'none', color: 'black', textAlign:'center' }}
                onClick={() => {
                  ctx.setIsDropVal(false);
                }}
            >
              Poll Hub
              </NavLink>
          </div>
        ) : (
          ''
        )}

        {localStorage.getItem('name') ? (
          <button
            className="btn-n"
            onClick={logout}
            style={{ fontSize: '16px' }}
          >
            Logout
          </button>
        ) : (
          ''
        )}
        {localStorage.getItem('name') ? (
          <div
            className="profile-tab-btn"
            title="see-profile"
            id="ff"
            style={{ padding: '10px' }}
          >
            <img src={Imgs.avatarImg} alt="avatarImg" className="avatarImg" />
            <p
              className="h5"
              style={{
                margin: '10px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '175px',
              }}
            >
              {localStorage.getItem('name')}
            </p>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
});

export default Header;
