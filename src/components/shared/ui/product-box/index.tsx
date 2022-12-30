import Dinero from 'dinero.js';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Add, Close, Remove } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

import { formatPriceText } from 'src/helper/products';
import {
  decreaseProductQuantity,
  deleteProduct,
  increaseProductQuantity,
} from 'src/redux/shopping-cart/actions';
import { getProductQuantity } from 'src/redux/shopping-cart/selectors/getProductQuantity';
import { AppDispatch, RootState } from 'src/redux/store';
import { Currency } from 'src/types';

import styles from './product-box.module.css';
import { ProductBoxProps } from './types';

const ProductBox = ({ product }: ProductBoxProps): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const exchangeRate = useSelector((state: RootState) => state.exchangeRate.exchangeRate?.value);
  const productQuantity = useSelector((state: RootState) => getProductQuantity(state, product._id));

  const dollarRate = exchangeRate ? parseFloat(exchangeRate) : 0;

  return (
    <div className={styles.container}>
      <Close className={styles.delete} onClick={() => dispatch(deleteProduct(product._id))} />
      <div className={styles.firstRowContainer}>
        <img
          className={styles.image}
          src={product.image.url}
          alt={product.brand + ' ' + product.name}
          title={product.brand + ' ' + product.name}
        ></img>
        <p className={styles.productName}>{product.brand + ' ' + product.name}</p>
      </div>
      <div className={styles.secondRowContainer}>
        <p className={styles.quantityText}>Seleccionar cantidad</p>
        <div className={styles.quantity}>
          <Tooltip title={'Quitar'}>
            <IconButton
              className={styles.iconButton}
              onClick={() => dispatch(decreaseProductQuantity(product._id))}
            >
              <Remove />
            </IconButton>
          </Tooltip>
          <p>{productQuantity}</p>
          <Tooltip
            title={productQuantity >= product.stock ? 'No hay más stock disponible.' : 'Añadir'}
          >
            <span>
              <IconButton
                className={styles.iconButton}
                disabled={productQuantity >= product.stock}
                onClick={() => dispatch(increaseProductQuantity(product._id))}
              >
                <Add />
              </IconButton>
            </span>
          </Tooltip>
        </div>
      </div>
      <div className={styles.thirdRowContainer}>
        <p className={styles.totalText}>Precio Unitario</p>
        <div className={styles.priceContainer}>
          <p className={styles.unitPriceText}>{formatPriceText(product) + ' + IVA'}</p>
        </div>
      </div>
      <div className={styles.thirdRowContainer}>
        <p className={styles.totalText}>TOTAL</p>
        <div className={styles.priceContainer}>
          <p className={styles.priceText}>
            {product.currency === Currency.DOLLAR
              ? 'AR$ ' +
                Dinero({ amount: product.price })
                  .multiply(productQuantity)
                  .multiply(dollarRate)
                  .toFormat('0,0.00')
              : formatPriceText(product, productQuantity)}
          </p>
          <p className={styles.ivaText}> + IVA</p>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
