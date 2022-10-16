import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from 'src/components/shared/common';

import styles from './layout.module.css';

const PublicLayout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PublicLayout;
