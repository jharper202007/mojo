import React from 'react';

import styles from '../navbar.module.css';

const TitleBlock = () => {
  return (
    <div className={styles.title_container}>
      <div className={styles.main_title}>
        <span className={styles.title_icon}><i className="fa fa-hospital-o" /></span>
        Buildings
      </div>
    </div>
  );
};

export default TitleBlock;
