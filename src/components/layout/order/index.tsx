import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import { OrderRoutes } from 'src/constants';
import { createOrder } from 'src/redux/orders/thunks';
import { resetState } from 'src/redux/shopping-cart/actions';
import { getOrderAmounts } from 'src/redux/shopping-cart/selectors/getOrderAmounts';
import { AppDispatch, RootState } from 'src/redux/store';

import styles from './order.module.css';

const OrderLayout = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const dollarRate = 160;
  const clientId = useSelector((state: RootState) => state.auth.user._id);
  const token = useSelector((state: RootState) => state.auth.token);
  const cartProducts = useSelector((state: RootState) => state.shoppingCart.products);
  const authorized = useSelector((state: RootState) => state.shoppingCart.authorized);
  const payReceipt = useSelector((state: RootState) => state.shoppingCart.receipt);
  const orderAmounts = useSelector((state: RootState) => getOrderAmounts(state, dollarRate));
  const location = useLocation();
  const navigate = useNavigate();

  let btnOptions: {
    text: string;
    onClick: () => void;
    disabled: boolean;
  };

  const handleCreateOrder = () => {
    const order = {
      products: cartProducts,
      client: clientId,
      authorized: authorized,
      amounts: orderAmounts,
      payment: payReceipt,
      exchangeRate: dollarRate,
      orderDate: Date.now(),
    };
    dispatch(createOrder(order, token));
    navigate(`/order${OrderRoutes.FINAL_SCREEN}`);
    dispatch(resetState());
  };

  switch (location.pathname) {
    case `/order${OrderRoutes.SUMMARY}`:
      btnOptions = {
        text: 'Continuar compra',
        onClick: () => navigate(`/order${OrderRoutes.AUTHORIZED}`),
        disabled: false,
      };
      break;
    case `/order${OrderRoutes.AUTHORIZED}`:
      btnOptions = {
        text: 'Continuar compra',
        onClick: () => navigate(`/order${OrderRoutes.FINISH_ORDER}`),
        disabled: authorized.length > 0 ? false : true,
      };
      break;
    case `/order${OrderRoutes.FINISH_ORDER}`:
      btnOptions = {
        text: 'Continuar compra',
        onClick: () => navigate(`/order${OrderRoutes.PAYMENT_METHOD}`),
        disabled: authorized.length > 0 ? false : true,
      };
      break;
    case `/order${OrderRoutes.PAYMENT_METHOD}`:
      btnOptions = {
        text: 'Finalizar compra',
        onClick: () => handleCreateOrder(),
        disabled: payReceipt ? false : true,
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
            <Button
              size="large"
              className={styles.button}
              onClick={btnOptions.onClick}
              disabled={btnOptions.disabled}
            >
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
