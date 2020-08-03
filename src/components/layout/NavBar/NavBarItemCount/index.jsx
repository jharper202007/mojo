import React from 'react';

import styles from '../navbar.module.css';

const NavBarItemCount = ({ count = 0 }) => {
  if (count <= 0) {
    return null;
  }

  return (
    <div className={styles.circle}>{count}</div>
  )
};

export default NavBarItemCount;
