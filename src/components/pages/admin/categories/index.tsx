import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Add, Check, Close, DeleteForever, Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import List from 'src/components/shared/ui/list';
import { Headers, TableButton } from 'src/components/shared/ui/list/types';
import QiraLoader from 'src/components/shared/ui/qira-loader';
import { SubCodes } from 'src/constants';
import {
  activateCategory,
  deleteCategory,
  getCategory,
  inactivateCategory,
} from 'src/redux/category/thunk';
import { Actions, Category } from 'src/redux/category/types';
import { closeModal, openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { AppDispatch, RootState } from 'src/redux/store';

import styles from './categories.module.css';

interface FormattedCategory {
  id: string;
  name: string;
  status: string;
  isActive: boolean;
  logicDelete: boolean;
}

const Categories = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state: RootState) => state.categories.categories);
  const isFetching = useSelector((state: RootState) => state.categories.isFetching);
  const [categoriesList, setCategoriesList] = useState([]);

  const formatData = (data: Category[]) => {
    const listData = data.map<FormattedCategory>((category) => {
      return {
        id: category._id,
        name: category.name,
        status: category.isActive ? 'Activada' : 'Desactivada',
        isActive: category.isActive,
        logicDelete: category.logicDelete,
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

  const buttons: ((rowData?: FormattedCategory) => TableButton)[] = [
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
                message: '¿Está seguro de que desea desactivar la categoría?',
                onConfirmCallback: async () => {
                  dispatch(closeModal());
                  const response = await dispatch(inactivateCategory(rowData.id));
                  if (response.type === Actions.INACTIVATE_CATEGORY_ERROR) {
                    if (response.payload.subcode === SubCodes.CATEGORY_WITH_PRODUCTS) {
                      dispatch(
                        openModal(ModalTypes.INFO, {
                          message:
                            'No es posible desactivar la categoría debido a que la misma posee productos asignados.',
                        }),
                      );
                    } else {
                      await dispatch(getCategory()),
                        dispatch(
                          openModal(ModalTypes.INFO, {
                            message: 'Ha ocurrido un error.',
                          }),
                        );
                    }
                  }
                },
                onCloseCallback: () => dispatch(closeModal()),
              }),
            )
          : dispatch(
              openModal(ModalTypes.CONFIRM, {
                message: '¿Está seguro de que desea activar la categoría?',
                onConfirmCallback: async () => {
                  dispatch(closeModal());
                  const response = await dispatch(activateCategory(rowData.id));
                  if (response.type === Actions.ACTIVATE_CATEGORY_ERROR) {
                    await dispatch(getCategory()),
                      dispatch(
                        openModal(ModalTypes.INFO, {
                          message: 'Ha ocurrido un error.',
                        }),
                      );
                  }
                },
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
            message: '¿Está seguro de que desea eliminar la categoría?',
            onConfirmCallback: async () => {
              dispatch(closeModal());
              const response = await dispatch(deleteCategory(rowData.id));
              if (response.type === Actions.DELETE_CATEGORY_ERROR) {
                if (response.payload.subcode === SubCodes.CATEGORY_WITH_PRODUCTS) {
                  dispatch(
                    openModal(ModalTypes.INFO, {
                      message:
                        'No es posible borrar la categoría debido a que la misma posee productos asignados.',
                    }),
                  );
                } else {
                  await dispatch(getCategory()),
                    dispatch(
                      openModal(ModalTypes.INFO, {
                        message: 'Ha ocurrido un error.',
                      }),
                    );
                }
              }
            },
            onCloseCallback: () => dispatch(closeModal()),
          }),
        );
      },
    }),
  ];

  const headers: Headers<FormattedCategory>[] = [
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
        <div className={styles.loaderContainer}>
          <QiraLoader />
        </div>
      ) : (
        <List<FormattedCategory>
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
