import React from 'react';

import styles from '../topbar.module.css';

const SearchBox = () => {
  return (
    <div className={styles.search_container}>
      <input className={styles.search} placeholder="Type to search..." />
    </div>
  );
};

export default SearchBox;
