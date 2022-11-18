import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Add, Close, Remove } from '@mui/icons-material';
import { IconButton } from '@mui/material';

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
  const dollarRate = 160;
  const productQuantity = useSelector((state: RootState) => getProductQuantity(state, product._id));

  return (
    <div className={styles.container}>
      <Close className={styles.delete} onClick={() => dispatch(deleteProduct(product._id))} />
      <div className={styles.firstRowContainer}>
        <img className={styles.image} src={product.image.url}></img>
        <p className={styles.productName}>{product.brand + ' ' + product.name}</p>
      </div>
      <div className={styles.secondRowContainer}>
        <p className={styles.quantityText}>Seleccionar cantidad</p>
        <div className={styles.quantity}>
          <IconButton
            className={styles.iconButton}
            onClick={() => dispatch(decreaseProductQuantity(product._id))}
          >
            <Remove />
          </IconButton>
          <p>{productQuantity}</p>
          <IconButton
            className={styles.iconButton}
            onClick={() => dispatch(increaseProductQuantity(product._id))}
          >
            <Add />
          </IconButton>
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
              ? 'AR$ ' + (product.price * productQuantity * dollarRate).toFixed(2)
              : formatPriceText(product, productQuantity)}
          </p>
          <p className={styles.ivaText}> + IVA</p>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
