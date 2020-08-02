import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../navbar.module.css';

const NavBarMenuItem = ({ title, link }) => {
  return (
    <NavLink to={link} exact className={styles.nav_item} activeClassName={styles.active}>
      <li>
        {title}
      </li>
    </NavLink>
  );
};

export default NavBarMenuItem;
