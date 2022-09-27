import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Delete, Edit } from '@mui/icons-material';

import List from 'src/components/shared/ui/list';
import { Headers, TableButton } from 'src/components/shared/ui/list/types';
import { resetStore } from 'src/redux/test/actions';

import styles from './home.module.css';

const Home = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetStore());
  }, []);

  const headers: Headers[] = [
    { header: 'Name', key: 'name' },
    { header: 'Email', key: 'email' },
  ];

  interface Admin {
    id: string;
    name: string;
    email: string;
  }

  const data: Admin[] = [
    { id: '1', name: 'Fran', email: 'fran@gmail.com' },
    { id: '2', name: 'Gina', email: 'gina@gmail.com' },
    { id: '3', name: 'Chaki', email: 'chaki@gmail.com' },
    { id: '4', name: 'Ari', email: 'ari@gmail.com' },
  ];

  const buttons: TableButton[] = [
    {
      active: true,
      icon: <Delete />,
      title: 'Delete',
      onClick: () => console.log('delete'),
    },
    {
      active: false,
      icon: <Edit />,
      title: 'Edit',
      onClick: () => console.log('edit'),
    },
    {
      active: true,
      icon: <Edit />,
      title: 'Edit',
      onClick: () => console.log('edit'),
    },
  ];

  return (
    <section className={styles.container}>
      <h2>Home screen</h2>
      <List<Admin> headers={headers} data={data} showButtons={true} buttons={buttons}></List>
    </section>
  );
};

export default Home;
