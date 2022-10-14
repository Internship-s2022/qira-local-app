import Joi from 'joi';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Check, Close } from '@mui/icons-material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

import { SharedCheckbox } from 'src/components/shared/ui/checkbox';
import { InputText } from 'src/components/shared/ui/input';
import List from 'src/components/shared/ui/list';
import { Headers, TableButton } from 'src/components/shared/ui/list/types';
import { SharedModal } from 'src/components/shared/ui/modal';
import { ModalTypes } from 'src/components/shared/ui/modal/types';
import { SharedSelect } from 'src/components/shared/ui/select';
import { Options } from 'src/components/shared/ui/select/types';

import styles from './storybook.module.css';
import { TestCompValues } from './types';

const schema = Joi.object({
  firstName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  select: Joi.string().required(),
  checkbox: Joi.boolean(),
});

interface Admin {
  id: string;
  name: string;
  email: string;
  value: string;
  isActive: boolean;
}
const Storybook = (): JSX.Element => {
  const options: Options[] = [
    { label: 'Valor 1', value: 'Valor 1' },
    { label: 'Valor 2', value: 'Valor 2' },
    { label: 'Valor 3', value: 'Valor 3' },
  ];
  const { handleSubmit, control, reset } = useForm<TestCompValues>({
    defaultValues: {
      firstName: '',
      email: '',
      password: '',
      select: '',
      checkbox: false,
    },
    mode: 'onSubmit',
    resolver: joiResolver(schema),
  });

  const data: Admin[] = [
    { id: '1', name: 'Francisco', email: 'francisco@gmail.com', value: 'Valor 2', isActive: true },
    { id: '2', name: 'Gina', email: 'gina@gmail.com', value: 'Valor 3', isActive: true },
    { id: '3', name: 'Ivan', email: 'ivan@gmail.com', value: 'Valor 3', isActive: true },
    { id: '4', name: 'Ariana', email: 'ariana@gmail.com', value: 'Valor 1', isActive: true },
  ];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openModalImage, setOpenModalImage] = React.useState(false);
  const handleCloseModalImage = () => {
    setOpenModalImage(false);
  };

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
  const onSubmit = (data) => {
    console.log('Data: ', data);
    const newAdmin = {
      id: '01',
      name: data.firstName,
      email: data.email,
      value: data.select,
      isActive: true,
    };
    setListData([...listData, newAdmin]);
    handleClose();
    reset();
  };
  return (
    <div className={styles.container}>
      <List<Admin> headers={headers} data={listData} showButtons={true} buttons={buttons}></List>
      <SharedModal modalType={ModalTypes.BASIC_MODAL} open={open} onClose={handleClose}>
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
              margin="dense"
              size="small"
              fullWidth={true}
            />
            <InputText
              control={control}
              name="firstName"
              variant="outlined"
              optionalLabel="Name"
              margin="dense"
              size="small"
              fullWidth={true}
            />
            <SharedSelect
              label="Select"
              options={options}
              name="select"
              control={control}
              fullWidth
            />
            <SharedCheckbox label="CheckBox" name="checkbox" control={control} />
            <Button onClick={handleSubmit(onSubmit)} variant="contained" className={styles.button}>
              Submit
            </Button>
            <Button onClick={() => reset()} variant="outlined" className={styles.button}>
              Reset
            </Button>
          </div>
        </form>
      </SharedModal>
      <Button onClick={() => setOpenModalImage(true)}>Add image</Button>
      <SharedModal
        modalType={ModalTypes.UPLOAD_IMAGE}
        open={openModalImage}
        onClose={handleCloseModalImage}
        onConfirm={handleCloseModalImage}
      />
      <Button className={styles.button} onClick={handleOpen} variant="contained">
        Add new user
      </Button>
    </div>
  );
};

export default Storybook;
