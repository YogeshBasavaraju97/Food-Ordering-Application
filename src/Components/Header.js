import React from 'react';
import { LOGO_URL } from '../../utils/constant';
import { useState } from 'react';

const Header = () => {
  const [loginbtn, setLonginbtn] = useState('Login');
  return (
    <div className="header">
      <div className="logo">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
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
