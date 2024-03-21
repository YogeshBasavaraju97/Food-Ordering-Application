import React from 'react';
import { LOGO_URL } from '../../utils/constant';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';

const Header = () => {
  const [loginbtn, setLonginbtn] = useState('Login');
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-orange-200">
      <div className="logo">
        <img className="w-36" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex justify-between p-6 ml-3 ">
          <li className="px-4">Online Status : {onlineStatus ? '✅' : '🔴'}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="px-4"
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
