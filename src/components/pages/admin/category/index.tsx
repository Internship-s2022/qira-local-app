import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { joiResolver } from '@hookform/resolvers/joi';
import { Button } from '@mui/material';

import { ImageInput } from 'src/components/shared/ui/image-input';
import { InputText } from 'src/components/shared/ui/input';
import { createCategory } from 'src/redux/category/thunk';
import { AppDispatch } from 'src/redux/store';

import styles from './form.module.css';
import { CategoryFormValues, ImageToSend, toBase64 } from './types';
import { CategoryValidations } from './validations';

const CategoryForm = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const { handleSubmit, control, reset, setValue } = useForm<CategoryFormValues>({
    defaultValues: {
      name: '',
      image: undefined,
    },
    mode: 'onBlur',
    resolver: joiResolver(CategoryValidations),
  });

  const onSubmit = async (data) => {
    const image = data.image;
    let imageToSend: ImageToSend;
    if (image?.isNew) {
      const imageFile: any = await toBase64(image.file);
      if (imageFile) {
        imageToSend = {
          base64: imageFile,
          name: image.file.name,
          type: image.file.type,
          isNew: true,
        };
      }
    }
    const submitData = {
      name: data.name,
      image: imageToSend,
    };
    dispatch(createCategory(submitData));
    reset();
  };

  return (
    <>
      <div className={styles.titleContainer}>
        <h1>Agregar nueva categoría</h1>
      </div>
      <form className={styles.formContainer}>
        <InputText
          control={control}
          name="name"
          type="text"
          color="info"
          optionalLabel="Nombre de la categoría"
          variant="outlined"
          margin="dense"
          size="small"
        />
        <ImageInput control={control} name="image" optionalLabel="Imagen" setValue={setValue} />
        <Button
          className={styles.button}
          variant="contained"
          color="info"
          onClick={handleSubmit(onSubmit)}
        >
          Agregar
        </Button>
      </form>
    </>
  );
};

export default CategoryForm;
