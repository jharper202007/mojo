import React from 'react';

import styles from '../topbar.module.css';

const SearchBox = () => {
  return (
    <div className={styles.search_container}>
      <input className={styles.form_control} placeholder="Type to search..." />
    </div>
  );
};

export default SearchBox;
