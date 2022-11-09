import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Add, FileCopyOutlined, PaidOutlined, Remove, StoreOutlined } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';

import { formatPriceText } from 'src/helper/products';
import { getProductById } from 'src/redux/products/selectors/getProductById';
import { getPublicProducts } from 'src/redux/products/thunks';
import { addProduct } from 'src/redux/shopping-cart/actions';
import { getProductQuantity } from 'src/redux/shopping-cart/selectors/getProductQuantity';
import { AppDispatch, RootState } from 'src/redux/store';

import styles from './product-detail.module.css';

export const ProductDetail = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const params = useParams();
  const selectedProduct = useSelector((state: RootState) => getProductById(state, params.id));
  const productQuantity = useSelector((state: RootState) => getProductQuantity(state, params.id));
  const [disabled, setDisabled] = useState<boolean>(false);

  const [count, setCount] = useState<number>(0);
  const [divInfo, setDivInfo] = useState<boolean>(false);
  const addToCart = () => {
    if (count >= 1) {
      const shoppingCartProduct = {
        product: selectedProduct,
        quantity: count,
      };
      dispatch(addProduct(shoppingCartProduct));
      setDisabled(true);
    }
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
              <div>
                <div className={styles.infoPayAndDelivery}>
                  <div className={styles.payInfo}>
                    <p className={styles.subtitle}>Formas de pago aceptadas</p>
                    <div className={styles.iconInfo}>
                      <PaidOutlined className={styles.payInfoIcon} />
                      <p>Transferencia bancaria</p>
                    </div>
                  </div>
                  <div className={styles.payInfo}>
                    <p className={styles.subtitle}>Tipos de entrega disponibles</p>
                    <div className={styles.iconInfo}>
                      <StoreOutlined className={styles.payInfoIcon} />
                      <p> Retira en QiraPoint</p>
                    </div>
                  </div>
                </div>
                <div className={styles.quantity}>
                  <p>Seleccionar cantidad</p>
                  <div className={styles.quantityIcons}>
                    <IconButton
                      className={styles.iconButton}
                      onClick={() => {
                        count >= 1 && setCount(count - 1);
                        setDisabled(false);
                      }}
                    >
                      <Remove />
                    </IconButton>
                    <p>{count}</p>
                    <IconButton
                      className={styles.iconButton}
                      onClick={() => {
                        setCount(count + 1);
                        setDisabled(false);
                        productQuantity >= 1 && setDivInfo(true);
                      }}
                    >
                      <Add />
                    </IconButton>
                  </div>
                </div>
                {divInfo && (
                  <div className={styles.divInfoQuantity}>
                    Usted está modificando la cantidad previamente elegida
                  </div>
                )}
              </div>
              <div>
                <div className={styles.priceContainerAmount}>
                  <p>TOTAL</p>
                  <p className={styles.priceText}>
                    {selectedProduct && formatPriceText(selectedProduct, count)}
                  </p>
                  <p className={styles.ivaText}> + IVA</p>
                </div>
                <Button
                  className={styles.button}
                  variant="contained"
                  color="primary"
                  disabled={disabled}
                  onClick={() => {
                    addToCart();
                    setDivInfo(false);
                  }}
                >
                  {selectedProduct?.stock > 0 ? 'Agregar al carrito' : 'Producto agotado'}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <section className={styles.informationContainer}>
          <div className={styles.information}>
            <h2 className={styles.informationTitle}>Información Técnica</h2>
            <div className={styles.description}>
              <p className={styles.informationSubtitle}>Descripción</p>
              <p>{selectedProduct?.description}</p>
            </div>
            {selectedProduct?.technicalFile && (
              <div className={styles.description}>
                <p className={styles.informationSubtitle}>Información Técnica</p>
                <a className={styles.pdf} href={selectedProduct?.technicalFile?.url}>
                  <FileCopyOutlined />
                  Ficha técnica
                </a>
              </div>
            )}
          </div>
        </section>
      </section>
    </div>
  );
};
