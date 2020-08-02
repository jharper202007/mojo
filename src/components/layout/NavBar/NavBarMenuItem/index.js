import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarMenuItem = ({ title, link }) => {
  return (
    <li>
      <NavLink to={link} exact>{title}</NavLink>
    </li>
  );
};

export default NavBarMenuItem;
