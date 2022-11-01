import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Add, Remove } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';

import { formatPriceText } from 'src/helper/products';
import {
  addProduct,
  decreaseProductQuantity,
  increaseProductQuantity,
} from 'src/redux/shopping-cart/actions';
import { getProductQuantity } from 'src/redux/shopping-cart/selectors/getProductQuantity';
import { AppDispatch, RootState } from 'src/redux/store';

import styles from './product-card.module.css';
import { ProductCardProps } from './types';

const ProductCard = ({ product }: ProductCardProps): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const productQuantity = useSelector((state: RootState) => getProductQuantity(state, product._id));

  const addToCart = () => {
    const shoppingCartProduct = {
      product: product,
      quantity: 1,
    };
    dispatch(addProduct(shoppingCartProduct));
  };

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
          <p className={styles.priceText}>{formatPriceText(product, productQuantity)}</p>
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