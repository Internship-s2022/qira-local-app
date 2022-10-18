import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import List from 'src/components/shared/ui/list';
import { getClients } from 'src/redux/clients/thunk';
import { AppDispatch, RootState } from 'src/redux/store';

import { Headers } from '../../../shared/ui/list/types';

interface Client {
  id: string;
  name: string;
  email: string;
  value: string;
  isActive: boolean;
}

const Clients = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  useEffect(() => {
    dispatch(getClients());
  }, []);

  const clients = useSelector((state: RootState) => state.clients.clients);
  const headers: Headers[] = [
    { header: 'Name', key: 'name' },
    { header: 'Email', key: 'email' },
    { header: 'Value', key: 'value' },
  ];

  return (
    <div>
      <List<Client> headers={headers} data={clients}></List>
    </div>
  );
};

export default Clients;
