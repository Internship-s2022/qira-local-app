import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from 'src/components/shared/common';
import ShoppingCart from 'src/components/shared/ui/shopping-cart';

import styles from './layout.module.css';

const PublicLayout = () => {
  return (
    <div className={styles.container}>
      <ShoppingCart />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PublicLayout;
