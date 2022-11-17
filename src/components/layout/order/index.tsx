import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import { OrderRoutes } from 'src/constants';
import { removeAuthorized } from 'src/redux/shopping-cart/actions';
import { getOrderAmounts } from 'src/redux/shopping-cart/selectors/getOrderAmounts';
import { AppDispatch, RootState } from 'src/redux/store';

import styles from './order.module.css';

const OrderLayout = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const dollarRate = 160;
  const orderAmounts = useSelector((state: RootState) => getOrderAmounts(state, dollarRate));
  const location = useLocation();
  const navigate = useNavigate();

  let btnOptions: {
    text: string;
    onClick: () => void;
  };
  switch (location.pathname) {
    case `/order${OrderRoutes.SUMMARY}`:
      btnOptions = {
        text: 'Continuar compra',
        onClick: () => navigate(`/order${OrderRoutes.AUTHORIZED}`),
      };
      break;
    case `/order${OrderRoutes.AUTHORIZED}`:
      btnOptions = {
        text: 'Continuar compra',
        onClick: () => navigate(`/order${OrderRoutes.FINISH_ORDER}`),
      };
      break;
    case `/order${OrderRoutes.FINISH_ORDER}`:
      btnOptions = {
        text: 'Continuar compra',
        onClick: () => navigate(`/order${OrderRoutes.PAYMENT_METHOD}`),
      };
      break;
    case `/order${OrderRoutes.PAYMENT_METHOD}`:
      btnOptions = {
        text: 'Finalizar compra',
        onClick: () => navigate(`/order${OrderRoutes.PAYMENT_METHOD}`),
      };
      break;
    default:
      break;
  }

  useEffect(() => {
    return () => {
      dispatch(removeAuthorized());
    };
  }, []);

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
          <div className={styles.sidebarContent}>
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
