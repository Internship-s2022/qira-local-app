import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Check, Close } from '@mui/icons-material';
import { Button } from '@mui/material';

import List from 'src/components/shared/ui/list';
import { Headers, TableButton } from 'src/components/shared/ui/list/types';
import { openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { AppDispatch } from 'src/redux/store';

import styles from './storybook.module.css';
interface Admin {
  id: string;
  name: string;
  email: string;
  value: string;
  isActive: boolean;
}
const Storybook = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();

  const data: Admin[] = [
    { id: '1', name: 'Francisco', email: 'francisco@gmail.com', value: 'Valor 2', isActive: true },
    { id: '2', name: 'Gina', email: 'gina@gmail.com', value: 'Valor 3', isActive: true },
    { id: '3', name: 'Ivan', email: 'ivan@gmail.com', value: 'Valor 3', isActive: true },
    { id: '4', name: 'Ariana', email: 'ariana@gmail.com', value: 'Valor 1', isActive: true },
  ];

  const [listData, setListData] = useState(data);
  const headers: Headers[] = [
    { header: 'Name', key: 'name' },
    { header: 'Email', key: 'email' },
    { header: 'Value', key: 'value' },
  ];

  const buttons: ((rowData?: Admin) => TableButton)[] = [
    (rowData) => ({
      active: true,
      icon: rowData.isActive ? <Close /> : <Check />,
      title: rowData.isActive ? 'Disable' : 'Enable',
      onClick: () => {
        const newData = listData.filter((item) => item.id !== rowData.id);
        return setListData(newData);
      },
    }),
  ];
  return (
    <div className={styles.container}>
      <List<Admin> headers={headers} data={listData} showButtons={true} buttons={buttons}></List>
      <Button onClick={() => dispatch(openModal(ModalTypes.UPLOAD_IMAGE))}>Add image</Button>
      <Button onClick={() => dispatch(openModal(ModalTypes.UPLOAD_PDF))}>Add PDF</Button>
    </div>
  );
};

export default Storybook;
