import React from 'react';
import { useSelector } from 'react-redux';
import { ShoppingCartOutlined } from '@mui/icons-material';
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
          <p className={styles.title}>Productos ({shoppingCartProducts.length})</p>
          <div className={styles.productsContainer}>
            {shoppingCartProducts.map((product) => (
              <ProductBox key={product.product._id} product={product.product} />
            ))}
          </div>
          <div className={styles.priceContainer}>
            <div className={styles.totalPrice}>
              <p className={styles.totalText}>TOTAL</p>
              <div className={styles.priceTextContainer}>
                <p className={styles.priceText}>{'AR$ ' + orderAmounts.total}</p>
                <p className={styles.ivaText}> + IVA</p>
              </div>
            </div>
            <Button size="large" className={styles.button}>
              Finalizar compra
            </Button>
          </div>
        </>
      ) : (
        <div className={styles.emptyContainer}>
          <ShoppingCartOutlined className={styles.icon} />
          <p className={styles.firstText}>Su carrito se encuentra vacío.</p>
          <p className={styles.secondText}>Por favor seleccione un articulo para empezar</p>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
