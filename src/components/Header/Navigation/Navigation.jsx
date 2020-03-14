import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/mainLogo.png';

const Navigation = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <NavLink className="navbar-item" exact to="/">
            <img src={Logo} height="28" alt="logo" />
          </NavLink>
        </div>
        <div className="navbar-menu is-active">
          <div className="navbar-end">
            <NavLink className="navbar-item" exact to="/">
              Home
            </NavLink>
            <NavLink className="navbar-item" to="/news">
              News
            </NavLink>
            <NavLink className="navbar-item" to="/profile">
              Profile
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
