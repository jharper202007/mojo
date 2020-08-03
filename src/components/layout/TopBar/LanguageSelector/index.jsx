import React from 'react';
import flags from 'emoji-flags';

import styles from '../topbar.module.css';

const languages = [
  {label: 'ENG', flag: flags.GB, 'description': 'English'},
  {label: 'FRA', flag: flags.FR, 'description': 'French'},
  {label: 'GER', flag: flags.DE, 'description': 'German'},
];

const LanguageSelector = () => {
  return (
    <div className={styles.lang_container}>
    <span class="flag-icon flag-icon-gr" />
      <select className={`${styles.lang_selector} ${styles.form_control}`}>
        {languages.map(lang => (
          <option value={lang.label} key={lang.description}>
            {lang.flag.emoji} {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
