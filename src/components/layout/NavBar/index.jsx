import React from 'react';

import NavBarMenu from './NavBarMenu';
import navigation from '../../../data/navigation';

const NavBar = () => {
  return (
    <nav>
      {navigation.map(subMenu => (
        <NavBarMenu key={subMenu.title} {...subMenu} />
      ))}
    </nav>
  );
}

export default NavBar;
