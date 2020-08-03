import React from 'react';

import styles from './topbar.module.css';
import SearchBox from './SearchBox';

const TopBar = ({ title }) => {
  return (
    <div className={styles.topbar}>
      <div className={styles.topbar_title}>{title}</div>
      <SearchBox />
    </div>
  );
};

export default TopBar;
