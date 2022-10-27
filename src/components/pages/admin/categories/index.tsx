import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Add, Check, Close, DeleteForever, Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import List from 'src/components/shared/ui/list';
import { Headers, TableButton } from 'src/components/shared/ui/list/types';
import {
  activateCategory,
  deleteCategory,
  getCategory,
  inactivateCategory,
} from 'src/redux/category/thunk';
import { closeModal, openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { AppDispatch, RootState } from 'src/redux/store';

import styles from './categories.module.css';

interface Category {
  id: string;
  name: string;
  isActive: boolean;
  logicDelete: boolean;
}

const Categories = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state: RootState) => state.categories.categories);
  const isFetching = useSelector((state: RootState) => state.categories.isFetching);
  const [categoriesList, setCategoriesList] = useState([]);

  const formatData = (data) => {
    const listData = data.map((category) => {
      return {
        id: category._id,
        name: category.name,
        status: category.isActive ? 'Activada' : 'Desactivada',
        isActive: category.isActive,
      };
    });
    setCategoriesList(listData);
  };

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  useEffect(() => {
    formatData(categories);
  }, [categories]);

  const buttons: ((rowData?: Category) => TableButton)[] = [
    (rowData) => ({
      active: true,
      icon: <Edit />,
      title: 'Editar',
      onClick: () => {
        navigate(`/admin/category/${rowData.id}`);
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
                message: '¿Está seguro que desea desactivar la categoría?',
                onConfirmCallback: () => dispatch(inactivateCategory(rowData.id)),
                onCloseCallback: () => dispatch(closeModal()),
              }),
            )
          : dispatch(
              openModal(ModalTypes.CONFIRM, {
                message: '¿Está seguro que desea activar la categoría?',
                onConfirmCallback: () => dispatch(activateCategory(rowData.id)),
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
            message: '¿Está seguro que desea eliminar la categoría?',
            onConfirmCallback: () => dispatch(deleteCategory(rowData.id)),
            onCloseCallback: () => dispatch(closeModal()),
          }),
        );
      },
    }),
  ];

  const headers: Headers[] = [
    { header: 'Categoría', key: 'name' },
    { header: 'Estado', key: 'status' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>Categorías</h1>
        <div className={styles.addNewCategory}>
          <h3>Agregar nueva categoría</h3>
          <IconButton
            className={styles.addButton}
            disableRipple={true}
            size="large"
            onClick={() => navigate('/admin/category')}
          >
            <Add />
          </IconButton>
        </div>
      </div>
      {isFetching ? (
        <></>
      ) : (
        <List<Category>
          headers={headers}
          showButtons={true}
          buttons={buttons}
          data={categoriesList}
        ></List>
      )}
    </div>
  );
};

export default Categories;
