import React from 'react';

import TitleBlock from './TitleBlock';
import NavBarMenu from './NavBarMenu';
import navigation from '../../../data/navigation';
import styles from './navbar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.sidenav}>
      <TitleBlock />
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
