import React from 'react';

import NavBarMenu from './NavBarMenu';
import navigation from '../../../data/navigation';
import styles from './navbar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.sidenav}>
      {navigation.map((subMenu, index) => (
        <NavBarMenu
          key={subMenu.title}
          {...subMenu}
          isLastSubMenu={index === navigation.length - 1}
        />
      ))}
    </nav>
  );
}

export default NavBar;
