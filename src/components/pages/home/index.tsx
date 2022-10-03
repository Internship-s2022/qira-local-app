import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Check, Close } from '@mui/icons-material';

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
    isActive: boolean;
  }

  const data: Admin[] = [
    { id: '1', name: 'Fran', email: 'fran@gmail.com', isActive: true },
    { id: '2', name: 'Gina', email: 'gina@gmail.com', isActive: false },
    { id: '3', name: 'Chaki', email: 'chaki@gmail.com', isActive: true },
    { id: '4', name: 'Ari', email: 'ari@gmail.com', isActive: false },
  ];

  const buttons: ((rowData?: Admin) => TableButton)[] = [
    (rowData) => ({
      active: true,
      icon: rowData.isActive ? <Close /> : <Check />,
      title: rowData.isActive ? 'Disable' : 'Enable',
      onClick: rowData.isActive ? () => console.log('Disabled') : () => console.log('Enabled'),
    }),
  ];

  return (
    <section className={styles.container}>
      <h2>Home screen</h2>
      <List<Admin> headers={headers} data={data} showButtons={true} buttons={buttons}></List>
    </section>
  );
};

export default Home;
