import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
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
          href="https://wa.me/5493412115850?text=Por%20favor,%20contáctenos%20para%20gestionar%20la%20recuperaci%C3%B3n%20de%20contrase%C3%B1a."
          target="_blank"
          rel="noreferrer"
          variant="contained"
          color="primary"
          data-testid="recover-modal-btn"
          className={styles.button}
        >
          {<WhatsAppIcon className={styles.whatsAppIcon} />} Ir a whatsapp
        </Button>
      </div>
    </div>
  );
};
