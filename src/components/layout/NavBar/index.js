import React from 'react';
import { NavLink } from 'react-router-dom';

import navigation from '../../../data/navigation';

const NavBar = () => {
  return (
    <nav>
      {navigation.map(subMenu => (
        <div key={subMenu.title}>
          <div>{subMenu.title}</div>
          <ul>
          {subMenu.items.map(item => (
            <li key={item.link}>
              <NavLink to={item.link} exact>{item.title}</NavLink>
            </li>
          ))}
          </ul>
        </div>
      ))}
      Nav bar goes here
    </nav>
  );
}

export default NavBar;
