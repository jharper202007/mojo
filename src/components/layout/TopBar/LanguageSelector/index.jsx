import React from 'react';
import flags from 'emoji-flags';

import styles from '../topbar.module.css';
import formStyles from '../../../common/forms.module.css';

const languages = [
  {label: 'ENG', flag: flags.GB, 'description': 'English'},
  {label: 'FRA', flag: flags.FR, 'description': 'French'},
  {label: 'GER', flag: flags.DE, 'description': 'German'},
];

const LanguageSelector = () => {
  return (
    <div className={styles.lang_container}>
      <select className={`${styles.lang_selector} ${formStyles.form_control}`}>
        {languages.map(lang => (
          <option value={lang.label} key={lang.description}>
            {/* lang.flag.emoji */} {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
