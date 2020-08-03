import React from 'react';
import { NavLink } from 'react-router-dom';

import NavBarItemCount from './../NavBarItemCount';
import styles from '../navbar.module.css';

const itemCounts = {
  conversations: 2
};

const NavBarMenuItem = ({ title, link }) => {
  const count = itemCounts[title.toLowerCase()];
  return (
    <NavLink to={link} exact className={styles.nav_item} activeClassName={styles.active}>
      <li>
        {title} {count && <NavBarItemCount count={count} />}
      </li>
    </NavLink>
  );
};

export default NavBarMenuItem;
