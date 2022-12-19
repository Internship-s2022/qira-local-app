import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Footer, Header, SidebarHome } from 'src/components/shared/common';
import ShoppingCart from 'src/components/shared/ui/shopping-cart';
import { RootState } from 'src/redux/store';

import styles from './layout.module.css';

const PublicLayout = () => {
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  return (
    <div className={isOpen ? styles.containerWithSidebar : styles.container}>
      <ShoppingCart />
      <Header />
      <SidebarHome isOpen={isOpen} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PublicLayout;
