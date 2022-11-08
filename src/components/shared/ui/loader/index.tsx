import React from 'react';

import styles from './loader.module.css';

export const Loader = (): JSX.Element => {
  return (
    <div className={styles.loadRow}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
