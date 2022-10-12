import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';

import styles from './uploadImage.module.css';

export const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState<MediaSource>();
  const [preview, setPreview] = useState<string>();

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
    <>
      <div className={styles.titleModalImage}>Select a image</div>
      <div className={styles.imageContainer}>
        {selectedFile && <img className={styles.image} src={preview} />}
      </div>
      <div className={styles.buttonContainer}>
        <Button variant="contained" className={preview ? styles.buttonEdit : ''} component="label">
          {preview ? <> Edit File </> : <> Upload File </>}
          <input hidden type="file" onChange={onSelectFile} />
        </Button>
        {preview && (
          <Button className={styles.buttonSend} variant="contained" component="label">
            subir
          </Button>
        )}
      </div>
    </>
  );
};
