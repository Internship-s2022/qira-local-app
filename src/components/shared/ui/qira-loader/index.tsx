import React from 'react';

import { ReactComponent as QiraLogo } from 'src/assets/logo-qira.svg';

import styles from './qira-loader.module.css';

const QiraLoader = () => {
  return <QiraLogo fill="#F05523" className={styles.logoQira} />;
};

export default QiraLoader;
