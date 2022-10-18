import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';

import { SharedModal } from 'src/components/shared/ui/modal';
import { ModalTypes } from 'src/components/shared/ui/modal/types';
import { RootState } from 'src/redux/store';

import styles from './login.module.css';

const Login = () => {
  const [openLogIn, setOpenLogIn] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);

  const message = useSelector((state: RootState) => state.auth.message);

  return (
    <section className={styles.container}>
      <div>
        <Button onClick={() => setOpenLogIn(true)} variant="contained">
          LOG IN
        </Button>
        <SharedModal
          modalType={ModalTypes.LOGIN}
          open={openLogIn}
          onConfirm={() => setOpenLogIn(false)}
          onClose={() => {
            setOpenLogIn(false);
            setOpenError(true);
          }}
        />
        {
          <SharedModal
            modalType={ModalTypes.ERROR}
            open={openError}
            onClose={() => setOpenError(false)}
            onConfirm={() => setOpenError(false)}
          />
        }
        <Button onClick={() => setOpenError(true)} variant="contained">
          ERROR
        </Button>
      </div>
    </section>
  );
};

export default Login;
