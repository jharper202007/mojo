import React from 'react';

import NavBarMenuItem from '../NavBarMenuItem';
import styles from '../navbar.module.css';

const NavBarMenu = ({ title, items, isLastSubMenu }) => {
  return (
    <div className={styles.sub_menu}>
      <div className={styles.menu_title}>{title}</div>
      <ul>
        {items.map(item => (
          <NavBarMenuItem key={item.link} {...item} />
        ))}
      </ul>

      {!isLastSubMenu && <hr className={styles.divider} />}
    </div>
  )
};

export default NavBarMenu;
