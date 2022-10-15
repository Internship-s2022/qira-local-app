import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';

import { UploadPdfProps } from './types';
import styles from './upload-pdf.module.css';

export const UploadPdf = (props: UploadPdfProps) => {
  const [selectedNameFile, setSelectedNameFile] = useState<string>();
  const [preview, setPreview] = useState<string>();

  useEffect(() => {
    if (!selectedNameFile) {
      return setPreview(undefined);
    }
    setPreview(selectedNameFile);
  }, [selectedNameFile]);

  const onSelectFile = (e) => {
    if (e.target.files.length) {
      setSelectedNameFile(e.target.files[0].name);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleModalImage}>Selecciona un archivo</div>
      <div className={styles.fileContainer}>
        {selectedNameFile && <div className={styles.fileName}>{preview}</div>}
      </div>
      <div className={styles.buttonContainer}>
        <Button variant="contained" className={preview ? styles.buttonEdit : ''} component="label">
          {preview ? <> Elegir otro archivo </> : <> Subir Archivo </>}
          <input hidden type="file" onChange={onSelectFile} />
        </Button>
        {preview && (
          <Button
            onClick={props.onConfirm}
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
