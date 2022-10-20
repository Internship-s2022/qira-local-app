import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';

import { RootState } from 'src/redux/store';

import { CustomFile } from '../types';
import styles from './upload-image.module.css';

export const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState<CustomFile>();
  const [preview, setPreview] = useState<string>();
  const options = useSelector((state: RootState) => state.modal.options);

  useEffect(() => {
    if (!selectedFile) {
      return setPreview(undefined);
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (e.target.files.length) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleModalImage}>Selecciona una imagen</div>
      <div className={styles.imageContainer}>
        {selectedFile && <img className={styles.image} src={preview} />}
      </div>
      <div className={styles.buttonContainer}>
        <Button variant="contained" className={preview ? styles.buttonEdit : ''} component="label">
          {preview ? <> Elegir otro archivo </> : <> Subir imagen </>}
          <input hidden type="file" accept="image/*" onChange={onSelectFile} />
        </Button>
        {preview && (
          <Button
            onClick={() => options.onConfirmCallback(selectedFile)}
            className={styles.buttonSend}
            variant="contained"
            component="label"
          >
            subir
          </Button>
        )}
      </div>
    </div>
  );
};
