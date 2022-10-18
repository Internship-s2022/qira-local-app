import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';

import { CustomFile } from '../types';
import { UploadPdfProps } from './types';
import styles from './upload-pdf.module.css';

export const UploadPdf = (props: UploadPdfProps) => {
  const [selectedFile, setSelectedFile] = useState<CustomFile>();
  const [preview, setPreview] = useState<string>();

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
      <div className={styles.titleModalImage}>Selecciona un archivo</div>
      <div className={styles.fileContainer}>
        {preview && <div className={styles.fileName}>{preview}</div>}
      </div>
      <div className={styles.buttonContainer}>
        <Button variant="contained" className={preview ? styles.buttonEdit : ''} component="label">
          {preview ? <> Elegir otro archivo </> : <> Subir Archivo </>}
          <input hidden type="file" accept=".pdf" onChange={onSelectFile} />
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
