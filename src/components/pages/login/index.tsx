import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';

import { SharedModal } from 'src/components/shared/ui/modal';
import { openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { AppDispatch } from 'src/redux/store';
import { capitalizeFirstLetter } from 'src/utils/formatters';

import styles from './login.module.css';

const Login = () => {
  const dispatch: AppDispatch<null> = useDispatch();

  return (
    <section className={styles.container}>
      <h2>{capitalizeFirstLetter('login')}</h2>
      <Button color="primary" variant="contained">
        LOG IN
      </Button>
      <Button
        color="primary"
        variant="contained"
        onClick={() => dispatch(openModal(ModalTypes.REGISTER_FORM))}
      >
        SIGN UP
      </Button>
      <SharedModal></SharedModal>
    </section>
  );
};

export default Login;
