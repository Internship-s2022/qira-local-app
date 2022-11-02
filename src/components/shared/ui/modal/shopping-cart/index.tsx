import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';

import { getOrderAmounts } from 'src/redux/shopping-cart/selectors/getOrderAmounts';
import { RootState } from 'src/redux/store';

import ProductBox from '../../product-box';
import styles from './shopping-cart.module.css';

const ShoppingCart = (): JSX.Element => {
  const dollarRate = 160;
  const shoppingCartProducts = useSelector((state: RootState) => state.shoppingCart.products);
  const orderAmounts = useSelector((state: RootState) => getOrderAmounts(state, dollarRate));

  return (
    <div className={styles.mainContainer}>
      {shoppingCartProducts.length >= 1 ? (
        <>
          <p className={styles.title}>Productos ({shoppingCartProducts.length + 1})</p>
          {shoppingCartProducts.map((product) => (
            <ProductBox key={product.product._id} product={product.product} />
          ))}
          <div className={styles.priceContainer}>
            <div className={styles.totalPrice}>
              <p className={styles.totalText}>TOTAL</p>
              <div className={styles.priceTextContainer}>
                <p className={styles.priceText}>{orderAmounts.total}</p>
                <p className={styles.ivaText}> + IVA</p>
              </div>
            </div>
            <Button className={styles.button}>Finalizar compra</Button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ShoppingCart;
