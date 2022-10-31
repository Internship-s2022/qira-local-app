import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Check, Close, DeleteForever } from '@mui/icons-material';

import List from 'src/components/shared/ui/list';
import { Headers, TableButton } from 'src/components/shared/ui/list/types';
import { closeModal, openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import * as thunks from 'src/redux/products/thunk';
import { AppDispatch, RootState } from 'src/redux/store';
import { Currency } from 'src/types';

import { Product } from './types';

const Products = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const isFetching = useSelector((state: RootState) => state.clients.isFetching);

  useEffect(() => {
    dispatch(thunks.getProducts());
  }, []);

  const formatData = (data) => {
    const listData = data.map((product) => {
      return {
        id: product._id,
        category: product.category,
        name: product.name,
        currency: product.currency === Currency.PESO ? 'ARS' : 'USD',
        price: product.price,
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
      icon: rowData.isActive ? <Close /> : <Check />,
      title: rowData.isActive ? 'Desactivar' : 'Activar',
      onClick: () => {
        rowData.isActive
          ? dispatch(
              openModal(ModalTypes.CONFIRM, {
                message: '¿Está seguro que desea desactivar el producto?',
                onConfirmCallback: () => dispatch(thunks.inactivateProduct(rowData.id)),
                onCloseCallback: () => dispatch(closeModal()),
              }),
            )
          : dispatch(
              openModal(ModalTypes.CONFIRM, {
                message: '¿Está seguro que desea activar el producto?',
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
            message: '¿Está seguro que desea eliminar el producto?',
            onConfirmCallback: () => dispatch(thunks.deleteProduct(rowData.id)),
            onCloseCallback: () => dispatch(closeModal()),
          }),
        );
      },
    }),
  ];

  return (
    <div>
      {isFetching ? (
        <></>
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