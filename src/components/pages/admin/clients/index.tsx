import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Check, Close, Edit, HowToReg, LockPerson } from '@mui/icons-material';

import List from 'src/components/shared/ui/list';
import * as thunks from 'src/redux/clients/thunk';
import { closeModal, openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { AppDispatch, RootState } from 'src/redux/store';

import { Headers, TableButton } from '../../../shared/ui/list/types';
import styles from './clients.module.css';

interface Client {
  id: string;
  businessName: string;
  cuit: string;
  phoneNumber: string;
  email: string;
  isActive: boolean;
  state: string;
  approved: boolean;
}

const Clients = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const navigate = useNavigate();
  const clients = useSelector((state: RootState) => state.clients.clients);
  const isFetching = useSelector((state: RootState) => state.clients.isFetching);

  useEffect(() => {
    dispatch(thunks.getClients());
  }, []);

  const formatData = (data) => {
    const listData = data.map((client) => {
      return {
        id: client._id,
        cuit: client.cuit,
        businessName: client.businessName,
        email: client.email,
        phoneNumber: client.phoneNumber,
        isActive: client.isActive,
        state: client.approved ? (client.isActive ? 'Habilitado' : 'Inhabilitado') : 'Pendiente',
        firebaseUid: client.firebaseUid ? client.firebaseUid : '',
        approved: client.approved,
      };
    });
    return listData;
  };

  const headers: Headers[] = [
    { header: 'CUIT', key: 'cuit' },
    { header: 'Razón Social', key: 'businessName' },
    { header: 'Email', key: 'email' },
    { header: 'Teléfono', key: 'phoneNumber' },
    { header: 'Estado', key: 'state' },
  ];

  const buttons: ((rowData: Client) => TableButton)[] = [
    (rowData) => ({
      active: true,
      icon: rowData.approved ? rowData.isActive ? <Close /> : <Check /> : <HowToReg />,
      title: rowData.approved ? (rowData.isActive ? 'Deshabilitar' : 'Habilitar') : 'Aprobar',
      onClick: () => {
        rowData.approved
          ? rowData.isActive
            ? dispatch(
                openModal(ModalTypes.CONFIRM, {
                  message: '¿Está seguro de que desea deshabilitar el cliente?',
                  onConfirmCallback: () => {
                    dispatch(thunks.inactivateClient(rowData.id));
                    dispatch(closeModal());
                  },
                  onCloseCallback: () => dispatch(closeModal()),
                }),
              )
            : dispatch(
                openModal(ModalTypes.CONFIRM, {
                  message: '¿Está seguro de que desea habilitar el cliente?',
                  onConfirmCallback: () => {
                    dispatch(thunks.activateClient(rowData.id));
                    dispatch(closeModal());
                  },
                  onCloseCallback: () => dispatch(closeModal()),
                }),
              )
          : dispatch(
              openModal(ModalTypes.CONFIRM, {
                message: '¿Está seguro de que desea aprobar el cliente?',
                onConfirmCallback: () => {
                  dispatch(thunks.approveClient(rowData.id));
                  dispatch(closeModal());
                },
                onCloseCallback: () => dispatch(closeModal()),
              }),
            );
      },
    }),
    (rowData) => ({
      active: false,
      icon: <LockPerson />,
      title: 'Cambiar contraseña',
      onClick: () => {
        dispatch(
          openModal(ModalTypes.CHANGE_PASSWORD, {
            message: `Esta cambiando la contraseña del cliente: "${rowData.businessName}"`,
            onConfirmCallback: () => dispatch(thunks.inactivateClient(rowData.id)),
            onCloseCallback: () => dispatch(closeModal()),
          }),
        );
      },
    }),
    (rowData) => ({
      active: true,
      icon: <Edit />,
      title: 'Editar Cliente',
      onClick: () => {
        navigate(`/admin/client/${rowData.id}`);
      },
    }),
  ];

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>Clientes</h1>
      </div>
      {isFetching ? (
        <></>
      ) : (
        <List<Client>
          headers={headers}
          data={formatData(clients)}
          showButtons={true}
          buttons={buttons}
        ></List>
      )}
    </div>
  );
};

export default Clients;
