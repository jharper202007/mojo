import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import NavBarItemCount from './../NavBarItemCount';
import styles from '../navbar.module.css';

const NavBarMenuItem = ({ title, link }) => {
  const itemCounts = useSelector(state => state.notificationCounts);
  const count = itemCounts ? itemCounts[title.toLowerCase()] : 0;
  return (
    <NavLink to={link} exact className={styles.nav_item} activeClassName={styles.active}>
      <li>
        {title} {(count > 0) && <NavBarItemCount count={count} />}
      </li>
    </NavLink>
  );
};

export default NavBarMenuItem;
