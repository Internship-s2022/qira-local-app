import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Button } from '@mui/material';

import { ImageInput } from 'src/components/shared/ui/image-input';
import { InputText } from 'src/components/shared/ui/input';

import styles from './form.module.css';
import { CategoryFormValues } from './types';
import { CategoryValidations } from './validations';

const CategoryForm = (): JSX.Element => {
  const { handleSubmit, control, reset } = useForm<CategoryFormValues>({
    defaultValues: {
      name: '',
    },
    mode: 'onSubmit',
    resolver: joiResolver(CategoryValidations),
  });
  return (
    <>
      <h1 className={styles.title}>Agregar nueva categoría</h1>
      <div className={styles.formContainer}>
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
        <ImageInput optionalLabel="Imagen" />
        <Button className={styles.button} variant="contained" color="info">
          Agregar
        </Button>
      </div>
    </>
  );
};

export default CategoryForm;
