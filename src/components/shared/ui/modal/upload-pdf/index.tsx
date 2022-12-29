import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
