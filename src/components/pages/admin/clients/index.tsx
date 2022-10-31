import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Check, Close, LockPerson } from '@mui/icons-material';

import List from 'src/components/shared/ui/list';
import * as thunks from 'src/redux/clients/thunk';
import { closeModal, openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { AppDispatch, RootState } from 'src/redux/store';

import { Headers, TableButton } from '../../../shared/ui/list/types';

interface Client {
  id: string;
  businessName: string;
  cuit: string;
  phoneNumber: string;
  email: string;
  isActive: boolean;
}

const Clients = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
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
        state: client.isActive ? 'Aprobado' : 'Pendiente',
        firebaseUid: client.firebaseUid ? client.firebaseUid : '',
      };
    });
    console.log(listData);
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
      icon: rowData.isActive ? <Close /> : <Check />,
      title: rowData.isActive ? 'Desactivar' : 'Activar',
      onClick: () => {
        rowData.isActive
          ? dispatch(
              openModal(ModalTypes.CONFIRM, {
                message: '¿Está seguro que desea desactivar el cliente?',
                onConfirmCallback: () => dispatch(thunks.inactivateClient(rowData.id)),
                onCloseCallback: () => dispatch(closeModal()),
              }),
            )
          : dispatch(
              openModal(ModalTypes.CONFIRM, {
                message: '¿Está seguro que desea activar el cliente?',
                onConfirmCallback: () => dispatch(thunks.activateClient(rowData.id)),
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
  ];

  return (
    <div>
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
