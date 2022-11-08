import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import { getOrderAmounts } from 'src/redux/shopping-cart/selectors/getOrderAmounts';
import { RootState } from 'src/redux/store';

import styles from './order.module.css';

const OrderLayout = (): JSX.Element => {
  const dollarRate = 160;
  const orderAmounts = useSelector((state: RootState) => getOrderAmounts(state, dollarRate));
  const location = useLocation();
  const navigate = useNavigate();

  enum Routes {
    SUMMARY = '/order/summary',
    AUTHORIZED = '/order/authorized',
    FINISH_ORDER = '/order/finish',
    PAYMENT_METHOD = '/order/payment',
  }
  let btnOptions: {
    text: string;
    onClick: () => void;
  };
  switch (location.pathname) {
    case Routes.SUMMARY:
      btnOptions = {
        text: 'Continuar compra',
        onClick: () => navigate(Routes.AUTHORIZED),
      };
      break;
    case Routes.AUTHORIZED:
      btnOptions = {
        text: 'Continuar compra',
        onClick: () => navigate(Routes.FINISH_ORDER),
      };
      break;
    case Routes.FINISH_ORDER:
      btnOptions = {
        text: 'Continuar compra',
        onClick: () => navigate(Routes.PAYMENT_METHOD),
      };
      break;
    case Routes.PAYMENT_METHOD:
      btnOptions = {
        text: 'Finalizar compra',
        onClick: () => navigate(Routes.PAYMENT_METHOD),
      };
      break;
    default:
      break;
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <Link to="/">
          <img
            className={styles.logoQira}
            src={`${process.env.PUBLIC_URL}/assets/images/logo-qira.svg`}
            alt=""
          />
        </Link>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.outletContainer}>
          <Outlet />
        </div>
        <div className={styles.pricesSidebar}>
          <h1 className={styles.title}>Resumen</h1>
          <div className={styles.priceDetails}>
            <div className={styles.productsPrice}>
              <p>{'Productos (AR$)'}</p>
              <p>{'AR$ ' + orderAmounts.products.toFixed(2)}</p>
            </div>
            <div className={styles.taxesPrice}>
              <p>IVA</p>
              <p>{'AR$ ' + orderAmounts.taxes.toFixed(2)}</p>
            </div>
          </div>
          <div className={styles.totalPrice}>
            <p>TOTAL</p>
            <p>{'AR$ ' + orderAmounts.total.toFixed(2)}</p>
          </div>
          <Button size="large" className={styles.button} onClick={btnOptions.onClick}>
            {btnOptions.text}
          </Button>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.logoContainer}>
          <img
            className={styles.logoQira}
            src={`${process.env.PUBLIC_URL}/assets/images/logo-qira.svg`}
          />
          <span className={styles.license}>© 2022 QIRA. Todos los derechos reservados.</span>
        </div>
      </div>
    </div>
  );
};

export default OrderLayout;
