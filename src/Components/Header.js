import React from 'react';
import { LOGO_URL } from '../../utils/constant';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';

const Header = () => {
  const [loginbtn, setLonginbtn] = useState('Login');
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus ? '✅' : '🔴'}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() => {
              loginbtn === 'Login'
                ? setLonginbtn('Logout')
                : setLonginbtn('Login');
            }}
          >
            {loginbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
