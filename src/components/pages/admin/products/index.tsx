import Dinero from 'dinero.js';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Add, Check, Close, DeleteForever, Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import List from 'src/components/shared/ui/list';
import { Headers, TableButton } from 'src/components/shared/ui/list/types';
import QiraLoader from 'src/components/shared/ui/qira-loader';
import { closeModal, openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import * as thunks from 'src/redux/products/thunk';
import { AppDispatch, RootState } from 'src/redux/store';
import { Currency } from 'src/types';

import styles from './products.module.css';
import { Product } from './types';

const Products = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state: RootState) => state.products.products);
  const isFetching = useSelector((state: RootState) => state.products.isFetching);

  useEffect(() => {
    dispatch(thunks.getProducts());
  }, []);

  const formatData = (data) => {
    const listData = data.map((product) => {
      return {
        id: product._id,
        category: product.category.name,
        name: product.name,
        currency: product.currency === Currency.PESO ? 'ARS' : 'USD',
        price: Dinero({ amount: product.price }).toFormat('0,0.00'),
        stock: product.stock,
        isActive: product.isActive,
        state: product.isActive ? 'Activo' : 'Inactivo',
      };
    });
    return listData;
  };

  const headers: Headers[] = [
    { header: 'Nombre', key: 'name' },
    { header: 'Categoría', key: 'category' },
    { header: 'Moneda', key: 'currency' },
    { header: 'Precio', key: 'price' },
    { header: 'Stock', key: 'stock' },
    { header: 'Estado', key: 'state' },
  ];

  const buttons: ((rowData: Product) => TableButton)[] = [
    (rowData) => ({
      active: true,
      icon: <Edit />,
      title: 'Editar',
      onClick: () => {
        navigate(`/admin/product/${rowData.id}`);
      },
    }),
    (rowData) => ({
      active: true,
      icon: rowData.isActive ? <Close /> : <Check />,
      title: rowData.isActive ? 'Desactivar' : 'Activar',
      onClick: () => {
        rowData.isActive
          ? dispatch(
              openModal(ModalTypes.CONFIRM, {
                message: '¿Está seguro de que desea desactivar el producto?',
                onConfirmCallback: () => dispatch(thunks.inactivateProduct(rowData.id)),
                onCloseCallback: () => dispatch(closeModal()),
              }),
            )
          : dispatch(
              openModal(ModalTypes.CONFIRM, {
                message: '¿Está seguro de que desea activar el producto?',
                onConfirmCallback: () => dispatch(thunks.activateProduct(rowData.id)),
                onCloseCallback: () => dispatch(closeModal()),
              }),
            );
      },
    }),
    (rowData) => ({
      active: true,
      icon: <DeleteForever />,
      title: 'Borrar',
      onClick: () => {
        rowData.logicDelete;
        dispatch(
          openModal(ModalTypes.CONFIRM, {
            message: '¿Está seguro de que desea eliminar el producto?',
            onConfirmCallback: () => dispatch(thunks.deleteProduct(rowData.id)),
            onCloseCallback: () => dispatch(closeModal()),
          }),
        );
      },
    }),
  ];

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>Productos</h1>
        <div className={styles.addNewProduct}>
          <h3>Agregar nuevo producto</h3>
          <IconButton
            className={styles.addButton}
            disableRipple={true}
            size="large"
            onClick={() => navigate('/admin/product')}
          >
            <Add />
          </IconButton>
        </div>
      </div>
      {isFetching ? (
        <div className={styles.loaderContainer}>
          <QiraLoader />
        </div>
      ) : (
        <List<Product>
          headers={headers}
          data={formatData(products)}
          showButtons={true}
          buttons={buttons}
        ></List>
      )}
    </div>
  );
};

export default Products;
