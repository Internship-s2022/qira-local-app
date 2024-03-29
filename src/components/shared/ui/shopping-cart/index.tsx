import Dinero from 'dinero.js';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Close, Delete, ShoppingCartOutlined } from '@mui/icons-material';
import { Box, Button, IconButton, Modal, Tooltip } from '@mui/material';

import { resetError } from 'src/redux/auth/actions';
import { closeModal, openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { closeCart, resetState } from 'src/redux/shopping-cart/actions';
import { getOrderAmounts } from 'src/redux/shopping-cart/selectors/getOrderAmounts';
import { AppDispatch, RootState } from 'src/redux/store';
import { UserRole } from 'src/types';

import ProductBox from '../product-box';
import styles from './shopping-cart.module.css';

const ShoppingCart = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.auth.token);
  const userRole = useSelector((state: RootState) => state.auth.role);
  const user = useSelector((state: RootState) => state.auth.user);
  const open = useSelector((state: RootState) => state.shoppingCart.isOpen);
  const shoppingCartProducts = useSelector((state: RootState) => state.shoppingCart.products);
  const orderAmounts = useSelector((state: RootState) => getOrderAmounts(state));

  const checkLoggedUser = () => {
    dispatch(closeCart());
    if (token && userRole === UserRole.CLIENT) {
      if (!user.approved || !user.isActive) {
        dispatch(
          openModal(ModalTypes.INFO, {
            message:
              'Lo sentimos, su cuenta no se encuentra activa para realizar esta operación. Para más información comuníquese con soporte técnico.',
          }),
        );
      } else {
        navigate('/order/summary');
      }
    } else if (UserRole.ADMIN === userRole) {
      dispatch(
        openModal(ModalTypes.INFO, {
          message: 'Las compras pueden ser realizadas sólo por clientes.',
        }),
      );
    } else {
      dispatch(
        openModal(ModalTypes.LOGIN, {
          onConfirmCallback: () => {
            navigate('/order/summary');
          },
          onCloseCallback: () => {
            dispatch(closeModal());
            dispatch(resetError());
          },
        }),
      );
    }
  };

  return (
    <Modal
      className={styles.modal}
      open={open}
      onClose={() => {
        dispatch(closeCart());
      }}
    >
      <Box className={styles.shoppingCart}>
        <Close onClick={() => dispatch(closeCart())} className={styles.closeModal} />
        <div className={styles.mainContainer}>
          {shoppingCartProducts.length >= 1 ? (
            <>
              <div className={styles.titleContainer}>
                <p className={styles.title}>Productos ({shoppingCartProducts.length})</p>
                <Tooltip title={'Vaciar carrito'} placement="right">
                  <IconButton onClick={() => dispatch(resetState())}>
                    <Delete className={styles.deleteIcon} />
                  </IconButton>
                </Tooltip>
              </div>
              <div className={styles.productsContainer}>
                {shoppingCartProducts.map((product) => (
                  <ProductBox key={product.product._id} product={product.product} />
                ))}
              </div>
              <div className={styles.priceContainer}>
                <div className={styles.totalPrice}>
                  <p className={styles.totalText}>TOTAL</p>
                  <div className={styles.priceTextContainer}>
                    <p className={styles.priceText}>
                      {'AR$ ' + Dinero({ amount: orderAmounts.products }).toFormat('0,0.00')}
                    </p>
                    <p className={styles.ivaText}> + IVA</p>
                  </div>
                </div>
                <Button size="large" className={styles.button} onClick={() => checkLoggedUser()}>
                  Finalizar compra
                </Button>
              </div>
            </>
          ) : (
            <div className={styles.emptyContainer}>
              <ShoppingCartOutlined className={styles.icon} />
              <p className={styles.firstText}>Su carrito se encuentra vacío.</p>
              <p className={styles.secondText}>Por favor, seleccione un artículo para comenzar.</p>
            </div>
          )}
        </div>
      </Box>
    </Modal>
  );
};

export default ShoppingCart;
