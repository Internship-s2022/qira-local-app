import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { joiResolver } from '@hookform/resolvers/joi';
import { HelpOutline } from '@mui/icons-material';
import { Button, Tooltip } from '@mui/material';

import { ImageInput } from 'src/components/shared/ui/image-input';
import { InputText } from 'src/components/shared/ui/input';
import { createCategory, getCategoryById, updateCategory } from 'src/redux/category/thunk';
import { Actions } from 'src/redux/category/types';
import { closeModal, openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { AppDispatch, RootState } from 'src/redux/store';

import styles from './form.module.css';
import { CategoryFormValues, ImageToSend, toBase64 } from './types';
import { CategoryValidations } from './validations';

const CategoryForm = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const category = useSelector((state: RootState) => state.categories.category);
  const { handleSubmit, control, reset, setValue } = useForm<CategoryFormValues>({
    defaultValues: {
      name: '',
      image: undefined,
      url: '',
    },
    mode: 'onBlur',
    resolver: joiResolver(CategoryValidations),
  });

  useEffect(() => {
    params.id && dispatch(getCategoryById(params.id));
  }, []);

  useEffect(() => {
    if (category?._id) {
      reset({
        name: category?.name,
        image: {
          url: category?.image.url,
          isNew: false,
        },
        url: category?.url,
      });
    }
  }, [category]);

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
      url: data.url,
    };
    let response;
    if (params.id) {
      response = await dispatch(updateCategory(params.id, submitData));
      if (response?.type === Actions.UPDATE_CATEGORY_ERROR) {
        dispatch(
          openModal(ModalTypes.INFO, {
            message: 'Ha ocurrido un error',
          }),
        );
      } else {
        reset();
        dispatch(
          openModal(ModalTypes.INFO, {
            message: 'Categoría editada exitosamente.',
            onCloseCallback: () => {
              dispatch(closeModal());
              navigate('/admin/categories');
            },
          }),
        );
      }
    } else {
      response = await dispatch(createCategory(submitData));
      if (response?.type === Actions.CREATE_CATEGORY_ERROR) {
        dispatch(
          openModal(ModalTypes.INFO, {
            message: 'Ha ocurrido un error',
          }),
        );
      } else {
        reset();
        dispatch(
          openModal(ModalTypes.INFO, {
            message: 'Categoría creada exitosamente.',
            onCloseCallback: () => {
              dispatch(closeModal());
              navigate('/admin/categories');
            },
          }),
        );
      }
    }
  };

  return (
    <>
      <div className={styles.titleContainer}>
        <h1>{params.id ? 'Editar categoría' : 'Agregar nueva categoría'}</h1>
      </div>
      <form className={styles.formContainer}>
        <div className={styles.columnsContainer}>
          <div className={styles.inputsContainer}>
            <InputText
              control={control}
              name="name"
              type="text"
              color="info"
              optionalLabel="Nombre *"
              variant="outlined"
              margin="dense"
              size="small"
            />
            <InputText
              control={control}
              name="url"
              type="text"
              color="info"
              optionalLabel="URL *"
              variant="outlined"
              margin="dense"
              size="small"
            />
            <Tooltip
              className={styles.helpTooltip}
              title="La URL será utilizada para redirigir al usuario a los productos con esa categoría. Debe ser descriptiva, contener letras minúsculas y guiónes en lugar de espacios."
            >
              <HelpOutline />
            </Tooltip>
          </div>
          <div className={styles.imageInputContainer}>
            <ImageInput
              control={control}
              name="image"
              optionalLabel="Imagen *"
              setValue={setValue}
            />
          </div>
        </div>
        <Button
          className={styles.button}
          variant="contained"
          color="info"
          onClick={handleSubmit(onSubmit)}
        >
          {params.id ? 'Editar' : 'Agregar'}
        </Button>
      </form>
    </>
  );
};

export default CategoryForm;
