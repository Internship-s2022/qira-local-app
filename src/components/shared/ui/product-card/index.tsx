import React from 'react';
import { Button } from '@mui/material';

import { Currency } from 'src/types';

import styles from './product-card.module.css';
import { ProductCardProps } from './types';

const ProductCard = ({ product }: ProductCardProps): JSX.Element => {
  const formatPriceText = () => {
    let text = '';
    if (product.currency === Currency.dollar) {
      text = 'USD ' + product.price;
    } else {
      text = '$ ' + product.price;
    }
    return text;
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
          <p className={styles.priceText}>{formatPriceText()}</p>
          <p className={styles.ivaText}> + IVA</p>
        </div>
      </div>
      <Button
        className={styles.button}
        variant="contained"
        color={product.stock > 0 ? 'primary' : 'secondary'}
      >
        {product.stock > 0 ? 'Agregar al carrito' : 'Producto agotado'}
      </Button>
    </div>
  );
};

export default ProductCard;
