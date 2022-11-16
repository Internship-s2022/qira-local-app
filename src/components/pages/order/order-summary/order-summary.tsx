import React from 'react';
import { useSelector } from 'react-redux';

import ProductBox from 'src/components/shared/ui/product-box';
import { RootState } from 'src/redux/store';

import styles from './order-summary.module.css';

const OrderSummary = (): JSX.Element => {
  const shoppingCartProducts = useSelector((state: RootState) => state.shoppingCart.products);

  return (
    <section className={styles.orderContainer}>
      <h1 className={styles.title}>Carrito de compras</h1>
      <p className={styles.subtitle}>Revise tu compra antes de continuar </p>
      <div>
        <div>
          <p className={styles.productQuantity}>Productos ({shoppingCartProducts.length})</p>
        </div>
        <div className={styles.productsContainer}>
          {shoppingCartProducts.map((product) => {
            return (
              <>
                <div className={styles.productBox}>
                  <ProductBox key={product.product._id} product={product.product} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
