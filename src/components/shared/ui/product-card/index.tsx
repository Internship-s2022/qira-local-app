import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Add, Remove } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';

import {
  addProduct,
  decreaseProductQuantity,
  increaseProductQuantity,
} from 'src/redux/shopping-cart/actions';
import { getProductQuantity } from 'src/redux/shopping-cart/selectors/getProductQuantity';
import { AppDispatch, RootState } from 'src/redux/store';
import { Currency } from 'src/types';

import styles from './product-card.module.css';
import { ProductCardProps } from './types';

const ProductCard = ({ product }: ProductCardProps): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const productQuantity = useSelector((state: RootState) => getProductQuantity(state, product._id));
  const formatPriceText = () => {
    let text = '';
    if (product.currency === Currency.dollar) {
      if (productQuantity > 0) {
        text = 'USD ' + (product.price * productQuantity).toFixed(2);
      } else {
        text = 'USD ' + product.price.toFixed(2);
      }
    } else {
      if (productQuantity > 0) {
        text = 'AR$ ' + (product.price * productQuantity).toFixed(2);
      } else {
        text = 'AR$ ' + product.price.toFixed(2);
      }
    }
    return text;
  };

  const addToCart = () => {
    const shoppingCartProduct = {
      product: product,
      quantity: 1,
    };
    dispatch(addProduct(shoppingCartProduct));
  };

  console.log(productQuantity);
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={product.image.url} />
        {product.isNew && <p className={styles.isNewLabel}>NUEVO</p>}
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.categoryText}>{product.category.name}</p>
        <p className={styles.nameText}>{product.brand + ' ' + product.name}</p>
        <div className={styles.priceContainer}>
          <p className={styles.priceText}>{formatPriceText()}</p>
          <p className={styles.ivaText}> + IVA</p>
        </div>
      </div>
      {productQuantity > 0 ? (
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
      ) : (
        <Button
          className={styles.button}
          variant="contained"
          color={product.stock > 0 ? 'primary' : 'secondary'}
          disabled={product.stock > 0 ? false : true}
          onClick={() => addToCart()}
        >
          {product.stock > 0 ? 'Agregar al carrito' : 'Producto agotado'}
        </Button>
      )}
    </div>
  );
};

export default ProductCard;
