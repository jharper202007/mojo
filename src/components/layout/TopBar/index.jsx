import React from 'react';

import styles from './topbar.module.css';
import SearchBox from './SearchBox';
import LanguageSelector from './LanguageSelector';

const TopBar = ({ title }) => {
  return (
    <div className={styles.topbar}>
      <div className={styles.topbar_title}>{title}</div>
      <div className={styles.topbar_right}>
        <SearchBox />
        <LanguageSelector />
      </div>
    </div>
  );
};

export default TopBar;
