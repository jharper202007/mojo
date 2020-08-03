import React, { useState } from 'react';

import styles from './search.module.css';
import formStyles from '../../../common/forms.module.css';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const performSearch = () => {
    // Search logic would go here
    console.log(`searching for ${searchTerm}`);
    setSearchTerm('');
  }
  return (
    <div className={styles.search_container}>
      <input
        className={formStyles.form_control}
        placeholder="Type to search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div
        className={styles.icon_container}
        onClick={performSearch}
      >
        <i className="fa fa-search" />
      </div>
    </div>
  );
};

export default SearchBox;
