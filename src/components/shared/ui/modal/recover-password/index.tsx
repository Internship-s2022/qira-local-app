import React from 'react';
import { Button } from '@mui/material';

import styles from './recover.module.css';

export const RecoverPassword = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Recuperar contraseña</h3>
      <p data-testid="recover-message">
        Por favor, comuníquese con soporte técnico para gestionar la recuperación de su contraseña.
      </p>
      <div className={styles.button}>
        <Button
          href="https://wa.me/5493412115850?text=Hola,%20me%20gustaria%20realizar%20una%20consulta"
          target="_blank"
          rel="noreferrer"
          variant="contained"
          color="primary"
          data-testid="recover-modal-btn"
          className={styles.button}
        >
          Ir a whatsapp
        </Button>
      </div>
    </div>
  );
};
