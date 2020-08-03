import React, { useState } from 'react';

import styles from '../buildings.module.css';

const options = [
  { icon: 'fa-th-list', name: 'list'},
  { icon: 'fa-th-large', name: 'grid'}
];

const ViewSelector = ({ defaultView = 'grid' }) => {
  const [current, setCurrent] = useState(defaultView);

  return (
    <div className={styles.view_selector}>
      {options.map(opt => (
        <div
          key={opt.name}
          onClick={() => setCurrent(opt.name)}
          className={`${styles.icon} ${current === opt.name && styles.selected}`}
        >
          <i className={`fa ${opt.icon}`} />
        </div>
      ))}
    </div>
  )
};

export default ViewSelector;
