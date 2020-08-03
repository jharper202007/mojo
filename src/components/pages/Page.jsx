import React from 'react';

import NavBar from '../layout/NavBar';
import TopBar from '../layout/TopBar';
import styles from './page.module.css';

/**
 * Generic page component
 * To allow easy re-use of main layout
 */
const Page = ({ title, children, isListPage = false }) => {
  return (
    <div className={styles.page}>
      <NavBar />
      <TopBar title={title} isListPage={isListPage} />
      <div className={styles.main}>
        {children}
      </div>
    </div>
  );
}

export default Page;
