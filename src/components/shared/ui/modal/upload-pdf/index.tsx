import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Check } from '@mui/icons-material';
import { Button } from '@mui/material';

import { RootState } from 'src/redux/store';

import { CustomFile } from '../types';
import styles from './upload-pdf.module.css';

export const UploadPdf = () => {
  const [selectedFile, setSelectedFile] = useState<CustomFile>();
  const [preview, setPreview] = useState<string>();
  const options = useSelector((state: RootState) => state.modal.options);

  useEffect(() => {
    if (!selectedFile) {
      return setPreview(undefined);
    }
    setPreview(selectedFile.name);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (e.target.files.length) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleModalPdf}>Seleccionar archivo</div>
      <div className={styles.fileContainer}>
        {preview ? (
          <div className={styles.fileName}>
            <Check color="success" />
            <p>{preview}</p>
          </div>
        ) : (
          <div className={styles.textContainer}>
            <p className={styles.text}>Por favor, selecciona un archivo de tu dispositivo.</p>
            <div>
              <p className={styles.textBold}>Tamaño máximo:</p>
              <p className={styles.text}>5MB</p>
            </div>
          </div>
        )}
      </div>
      <div className={styles.buttonContainer}>
        <Button variant={preview ? 'outlined' : 'contained'} component="label">
          {preview ? <> Elegir otro archivo </> : <> Subir Archivo </>}
          <input hidden type="file" accept=".pdf" onChange={onSelectFile} />
        </Button>
        {preview && (
          <Button
            onClick={() => options.onConfirmCallback(selectedFile)}
            className={styles.buttonSend}
            variant="contained"
            component="label"
          >
            Subir
          </Button>
        )}
      </div>
    </div>
  );
};
