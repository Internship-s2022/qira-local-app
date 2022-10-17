import Joi from 'joi';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
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
import { SharedSelect } from 'src/components/shared/ui/select';
import { Options } from 'src/components/shared/ui/select/types';
import { closeModal, openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { AppDispatch, RootState } from 'src/redux/store';

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
  const dispatch: AppDispatch<null> = useDispatch();
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
  const modalOpen = useSelector((state: RootState) => state.modal.isOpen);

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
    dispatch(closeModal());
    reset();
  };
  return (
    <div className={styles.container}>
      <List<Admin> headers={headers} data={listData} showButtons={true} buttons={buttons}></List>
      <SharedModal open={modalOpen} onClose={() => dispatch(closeModal())}>
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
      <Button onClick={() => dispatch(openModal(ModalTypes.UPLOAD_IMAGE))}>Add image</Button>
      <Button
        className={styles.button}
        onClick={() => dispatch(openModal(ModalTypes.BASIC_MODAL))}
        variant="contained"
      >
        Add new user
      </Button>
    </div>
  );
};

export default Storybook;
