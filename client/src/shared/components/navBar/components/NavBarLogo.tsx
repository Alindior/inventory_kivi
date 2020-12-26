import React from 'react';

import './NavBarLogo.scss';
import logo from './assets/logo.png';

const NavBarLogo = () => {
  return (
    <div className="Logo">
      <img src={logo} alt="logo" className="Logo__img" />
    </div>
  );
};

export default NavBarLogo;
