import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Add, PaidOutlined, Remove, StoreOutlined } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';

import { formatPriceText } from 'src/helper/products';
import { getProductById } from 'src/redux/products/selectors/getProductById';
import { getPublicProducts } from 'src/redux/products/thunks';
import {
  addProduct,
  decreaseProductQuantity,
  increaseProductQuantity,
} from 'src/redux/shopping-cart/actions';
import { getProductQuantity } from 'src/redux/shopping-cart/selectors/getProductQuantity';
import { AppDispatch, RootState } from 'src/redux/store';

import styles from './product-detail.module.css';

export const ProductDetail = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const params = useParams();
  const productQuantity = useSelector((state: RootState) => getProductQuantity(state, params.id));

  const selectedProduct = useSelector((state: RootState) => getProductById(state, params.id));

  const addToCart = () => {
    const shoppingCartProduct = {
      product: selectedProduct,
      quantity: 1,
    };
    dispatch(addProduct(shoppingCartProduct));
  };

  useEffect(() => {
    params.id && dispatch(getPublicProducts());
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.navHistory}>
        <Link className={styles.navLink} to="/">
          Inicio
        </Link>
        <p className={styles.navLink}>Producto</p>
        <p className={styles.navLink}>{selectedProduct?.brand}</p>
      </div>
      <section className={styles.productContainer}>
        <div className={styles.cardProduct}>
          <div className={styles.headerProduct}>
            {selectedProduct?.isNew && <p className={styles.isNewLabel}>Nuevo</p>}
            <p className={styles.productName}>{selectedProduct?.name}</p>
          </div>
          <div className={styles.imageAndPriceContainer}>
            <div className={styles.imageContainer}>
              <img className={styles.image} src={selectedProduct?.image.url} />
            </div>
            <div className={styles.priceContainer}>
              <div className={styles.infoPayAndDelivery}>
                <div className={styles.payInfo}>
                  <p>Formas de pago aceptadas</p>
                  <p className={styles.iconInfo}>
                    <PaidOutlined />
                    Transferencia bancaria
                  </p>
                </div>
                <div className={styles.payInfo}>
                  <p>Tipos de entrega disponibles</p>
                  <p className={styles.iconInfo}>
                    <StoreOutlined />
                    Retira en QiraPoint
                  </p>
                </div>
              </div>
              <div className={styles.priceContainerAmount}>
                <p>TOTAL</p>
                <p className={styles.priceText}>
                  {selectedProduct && formatPriceText(selectedProduct, productQuantity)}
                </p>
                <p className={styles.ivaText}> + IVA</p>
              </div>
              {productQuantity > 0 ? (
                <div className={styles.quantity}>
                  <IconButton
                    className={styles.iconButton}
                    onClick={() => dispatch(decreaseProductQuantity(selectedProduct?._id))}
                  >
                    <Remove />
                  </IconButton>
                  <p>{productQuantity}</p>
                  <IconButton
                    className={styles.iconButton}
                    onClick={() => dispatch(increaseProductQuantity(selectedProduct?._id))}
                  >
                    <Add />
                  </IconButton>
                </div>
              ) : (
                <Button
                  className={styles.button}
                  variant="contained"
                  color={selectedProduct?.stock > 0 ? 'primary' : 'secondary'}
                  disabled={selectedProduct?.stock > 0 ? false : true}
                  onClick={() => addToCart()}
                >
                  {selectedProduct?.stock > 0 ? 'Agregar al carrito' : 'Producto agotado'}
                </Button>
              )}
            </div>
          </div>
        </div>
        {/* <div>
          <p className={styles.nameText}>{selectedProduct?.brand + ' ' + selectedProduct?.name}</p>
        </div> */}
        <section className={styles.informationContainer}>
          <div>
            <h2>información</h2>
            <div>
              <p>descripción</p>
            </div>
            <div>
              <p>ficha tecnica</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};
