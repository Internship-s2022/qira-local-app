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

  // const data: Client[] = [
  //   { id: '1', name: 'Francisco', email: 'francisco@gmail.com', value: 'Valor 2', isActive: true },
  //   { id: '2', name: 'Gina', email: 'gina@gmail.com', value: 'Valor 3', isActive: true },
  //   { id: '3', name: 'Ivan', email: 'ivan@gmail.com', value: 'Valor 3', isActive: true },
  //   { id: '4', name: 'Ariana', email: 'ariana@gmail.com', value: 'Valor 1', isActive: true },
  // ];

  const clients = useSelector((state: RootState) => state.clients.clients);
  // const [listData, setListData] = useState(data);
  const headers: Headers[] = [
    { header: 'Name', key: 'name' },
    { header: 'Email', key: 'email' },
    { header: 'Value', key: 'value' },
  ];

  // setListData(clients);
  return (
    <div>
      <List<Client> headers={headers} data={clients}></List>
    </div>
  );
};

export default Clients;
