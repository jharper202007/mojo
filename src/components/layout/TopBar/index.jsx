import React from 'react';

import styles from './topbar.module.css';
import SearchBox from './SearchBox';
import LanguageSelector from './LanguageSelector';

const TopBar = ({ title, isListPage = false }) => {
  return (
    <div className={styles.topbar}>
      <div className={styles.topbar_title}>
        {title}
        {isListPage && (
          <span className={styles.title_icon}>
            <i className="fa fa-sort" />
          </span>
        )}
      </div>
      <div className={styles.topbar_right}>
        <SearchBox />
        <LanguageSelector />
      </div>
    </div>
  );
};

export default TopBar;
