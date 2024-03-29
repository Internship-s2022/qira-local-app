import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Check, Close } from '@mui/icons-material';
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

  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files.length) {
      const file = e.target.files[0] as CustomFile;
      setSelectedFile(file);
    }
  };

  const checkIfPDF = (name: string) => {
    if (name.includes('.pdf')) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleModalPdf}>Seleccionar archivo</div>
      <div className={styles.fileContainer}>
        {preview ? (
          checkIfPDF(preview) ? (
            <div className={styles.fileName}>
              <Check color="success" />
              <p>{preview}</p>
            </div>
          ) : (
            <div className={styles.fileName}>
              <Close color="error" />
              <p>{preview}</p>
            </div>
          )
        ) : (
          <div className={styles.textContainer}>
            <p className={styles.text}>Por favor, selecciona un archivo .pdf de tu dispositivo.</p>
            <div>
              <p className={styles.textBold}>Tamaño máximo:</p>
              <p className={styles.text}>5MB</p>
            </div>
          </div>
        )}
      </div>
      <div className={styles.buttonContainer}>
        <Button
          variant={preview ? 'outlined' : 'contained'}
          className={styles.button}
          component="label"
        >
          {preview ? <> Elegir otro archivo </> : <> Subir Archivo </>}
          <input hidden type="file" accept=".pdf" onChange={onSelectFile} />
        </Button>
        {preview && (
          <Button
            onClick={() => options.onConfirmCallback(selectedFile)}
            className={styles.button}
            variant="contained"
            component="label"
            disabled={!checkIfPDF(preview)}
          >
            Confirmar
          </Button>
        )}
      </div>
    </div>
  );
};
