import Joi from 'joi';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Check, Close } from '@mui/icons-material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

import { InputText } from 'src/components/shared/input';
import { SharedModal } from 'src/components/shared/modal';
import List from 'src/components/shared/ui/list';
import { Headers, TableButton } from 'src/components/shared/ui/list/types';

import styles from './test.module.css';
import { TestCompValues } from './types';

const schema = Joi.object({
  firstName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

interface Admin {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
}

const Storybook = (): JSX.Element => {
  const { handleSubmit, control, reset } = useForm<TestCompValues>({
    defaultValues: {
      firstName: '',
      email: '',
      password: '',
    },
    mode: 'onSubmit',
    resolver: joiResolver(schema),
  });

  const data: Admin[] = [
    { id: '1', name: 'Fran', email: 'fran@gmail.com', isActive: true },
    { id: '2', name: 'Gina', email: 'gina@gmail.com', isActive: false },
    { id: '3', name: 'Chaki', email: 'chaki@gmail.com', isActive: true },
    { id: '4', name: 'Ari', email: 'ari@gmail.com', isActive: false },
  ];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [listData, setListData] = useState(data);
  const headers: Headers[] = [
    { header: 'Name', key: 'name' },
    { header: 'Email', key: 'email' },
  ];

  const buttons: ((rowData?: Admin) => TableButton)[] = [
    (rowData) => ({
      active: true,
      icon: rowData.isActive ? <Close /> : <Check />,
      title: rowData.isActive ? 'Disable' : 'Enable',
      onClick: rowData.isActive ? () => console.log('Disabled') : () => console.log('Enabled'),
    }),
  ];
  const onSubmit = (data) => {
    console.log('Data: ', data);
    const newAdmin = {
      id: '01',
      name: data.firstName,
      email: data.email,
      isActive: true,
    };
    listData.push(newAdmin);
    handleClose();
    reset();
  };
  return (
    <div className={styles.container}>
      <List<Admin> headers={headers} data={listData} showButtons={true} buttons={buttons}></List>
      <SharedModal open={open} onClose={handleClose}>
        <form>
          <div className={styles.formContainer}>
            <InputText
              control={control}
              name="email"
              optionalLabel="Email"
              variant="outlined"
              margin="dense"
              size="small"
              fullWidth={true}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon style={{ color: '#F05523' }} />
                  </InputAdornment>
                ),
              }}
            />
            <InputText
              control={control}
              name="password"
              type="password"
              optionalLabel="Password"
              variant="outlined"
              margin="normal"
              size="small"
              fullWidth={true}
            />
            <InputText
              control={control}
              name="firstName"
              label="First name"
              variant="outlined"
              margin="dense"
              size="small"
              fullWidth={true}
            />
            <Button onClick={() => reset()} variant="outlined" className={styles.button}>
              Reset
            </Button>
            <Button onClick={handleSubmit(onSubmit)} variant="contained" className={styles.button}>
              Submit
            </Button>
          </div>
        </form>
      </SharedModal>
      <Button className={styles.button} onClick={handleOpen} variant="contained">
        Add new user
      </Button>
    </div>
  );
};

export default Storybook;
