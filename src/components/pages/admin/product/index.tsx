import Dinero from 'dinero.js';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { joiResolver } from '@hookform/resolvers/joi';
import { ArrowBack } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';

import { SharedCheckbox } from 'src/components/shared/ui/checkbox';
import { ImageInput } from 'src/components/shared/ui/image-input';
import { InputText } from 'src/components/shared/ui/input';
import { PdfInput } from 'src/components/shared/ui/pdf-input';
import QiraLoader from 'src/components/shared/ui/qira-loader';
import { SharedSelect } from 'src/components/shared/ui/select';
import { Options as SelectOptions } from 'src/components/shared/ui/select/types';
import { toBase64 } from 'src/helper/form';
import { getCategoryOptions } from 'src/redux/category/selectors/getCategoryOptions';
import { getCategory } from 'src/redux/category/thunk';
import { closeModal, openModal } from 'src/redux/modal/actions';
import { ModalTypes, Options } from 'src/redux/modal/types';
import { resetProduct } from 'src/redux/products/actions';
import { createProduct, getProductById, updateProduct } from 'src/redux/products/thunk';
import { Actions } from 'src/redux/products/types';
import { AppDispatch, RootState, useAppDispatch } from 'src/redux/store';
import { Currency, FileToSend } from 'src/types';

import styles from './product.module.css';
import { ProductFormValues } from './types';
import { ProductValidation } from './validations';

const ProductForm = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const isFetching = useSelector((state: RootState) => state.products.isFetching);
  const product = useSelector((state: RootState) => state.products.selectedProduct);
  const products = useSelector((state: RootState) => state.products.products);
  const categoryOptions = useSelector(getCategoryOptions);
  const productsNotSelected = products.filter((item) => item?._id !== product?._id);

  const {
    handleSubmit,
    control,
    reset,
    setValue,
    watch,
    formState: { isDirty },
  } = useForm<ProductFormValues>({
    defaultValues: {
      name: '',
      description: '',
      price: undefined,
      image: undefined,
      technicalFile: undefined,
      brand: '',
      category: '',
      currency: Currency.PESO,
      stock: '',
      isNew: true,
    },
    mode: 'onBlur',
    resolver: joiResolver(ProductValidation),
  });
  const imageInput = watch('image');
  const pdfInput = watch('technicalFile');

  const fileInputs = imageInput?.isNew || pdfInput?.isNew;

  useEffect(() => {
    params.id && dispatch(getProductById(params.id));
    return () => {
      dispatch(resetProduct());
    };
  }, []);

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  useEffect(() => {
    if (product?._id) {
      reset({
        name: product.name,
        description: product.description,
        price: parseFloat(Dinero({ amount: product.price }).toFormat('0.00')),
        image: {
          url: product.image.url,
          isNew: false,
        },
        technicalFile: {
          name: product.technicalFile?.key?.split('/').at(-1),
          isNew: false,
        },
        brand: product.brand,
        category: product.category._id,
        currency: product.currency,
        stock: product.stock.toString(),
        isNew: product.isNew,
      });
    }
  }, [product]);

  const duplicatedProduct = (data: ProductFormValues) => {
    return productsNotSelected.some(
      (product) => product.name === data.name && product.brand === data.brand,
    );
  };

  const onSubmit = async (data: ProductFormValues) => {
    if (duplicatedProduct(data)) {
      return dispatch(
        openModal(ModalTypes.INFO, { message: 'El producto que intenta crear ya existe.' }),
      );
    }
    const image = data.image;
    let imageToSend: FileToSend;
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

    const technicalFile = data.technicalFile;
    let pdfToSend: FileToSend;
    if (technicalFile?.isNew) {
      const pdfFile: any = await toBase64(technicalFile.file);
      if (pdfFile) {
        pdfToSend = {
          base64: pdfFile,
          name: technicalFile.file.name,
          type: technicalFile.file.type,
          isNew: true,
        };
      }
    }

    const submitData = {
      name: data.name,
      description: data.description,
      price: Dinero({ amount: data.price * 100 }).getAmount(),
      image: imageToSend,
      technicalFile: pdfToSend,
      brand: data.brand,
      category: data.category,
      currency: data.currency,
      stock: data.stock,
      isNew: data.isNew,
    };

    const modalOptions: Options = {};
    if (params.id) {
      const response = await dispatch(updateProduct(params.id, submitData));
      if (response?.type === Actions.UPDATE_PRODUCT_SUCCESS) {
        modalOptions.message = 'Producto editado exitosamente.';
        modalOptions.onCloseCallback = () => {
          dispatch(closeModal());
          navigate('/admin/products');
        };
      }
    } else {
      const response = await dispatch(createProduct(submitData));
      if (response?.type === Actions.CREATE_PRODUCT_SUCCESS) {
        modalOptions.message = 'Producto creado exitosamente.';
        modalOptions.onCloseCallback = () => {
          dispatch(closeModal());
          navigate('/admin/products');
        };
      }
    }
    if (!modalOptions.message) {
      modalOptions.message = 'Ha ocurrido un error';
    }
    dispatch(openModal(ModalTypes.INFO, modalOptions));
  };

  const currencyOptions: SelectOptions[] = [
    { label: 'USD', value: Currency.DOLLAR },
    { label: 'ARS', value: Currency.PESO },
  ];

  return (
    <>
      {isFetching ? (
        <div className={styles.loaderContainer}>
          <QiraLoader />
        </div>
      ) : (
        <>
          <div className={styles.titleContainer}>
            <h1>{params.id ? 'Editar producto' : 'Agregar nuevo producto'}</h1>
            <div className={styles.goBack}>
              <h3>Volver a la lista</h3>
              <IconButton
                className={styles.backButton}
                disableRipple={true}
                size="large"
                onClick={() => navigate('/admin/products')}
                data-testid="back-button"
              >
                <ArrowBack />
              </IconButton>
            </div>
          </div>
          <form className={styles.container} data-testid="product-form">
            <div className={styles.columnsContainer}>
              <div className={styles.column}>
                <div className={styles.categories}>
                  <SharedSelect
                    optionalLabel="Categoría *"
                    options={categoryOptions}
                    margin="dense"
                    name="category"
                    control={control}
                    fullWidth
                    size="small"
                  />
                </div>
                <InputText
                  control={control}
                  name="name"
                  type="text"
                  optionalLabel="Nombre del producto *"
                  variant="outlined"
                  margin="dense"
                  size="small"
                />
                <InputText
                  control={control}
                  name="brand"
                  type="text"
                  optionalLabel="Marca *"
                  variant="outlined"
                  margin="dense"
                  size="small"
                  className={styles.brand}
                />
                <div className={styles.priceInputs}>
                  <SharedSelect
                    optionalLabel="Moneda *"
                    options={currencyOptions}
                    name="currency"
                    control={control}
                    margin="dense"
                    fullWidth
                    size="small"
                    className={styles.currency}
                  />
                  <InputText
                    control={control}
                    name="price"
                    type="text"
                    optionalLabel="Precio *"
                    variant="outlined"
                    margin="dense"
                    size="small"
                    className={styles.price}
                  />
                </div>
                <InputText
                  control={control}
                  name="description"
                  type="text"
                  optionalLabel="Descripción"
                  variant="outlined"
                  margin="dense"
                  size="small"
                  multiline
                  minRows={4}
                  maxRows={4}
                />
              </div>
              <div className={styles.column}>
                <ImageInput control={control} name="image" label="Imagen *" setValue={setValue} />
                <PdfInput
                  control={control}
                  name="technicalFile"
                  label="Technical file"
                  setValue={setValue}
                />
                <div className={styles.stock}>
                  <InputText
                    control={control}
                    name="stock"
                    type="text"
                    optionalLabel="Stock *"
                    variant="outlined"
                    margin="dense"
                    size="small"
                    className={styles.stock}
                  />
                </div>
                <SharedCheckbox
                  label="Nuevo"
                  name="isNew"
                  control={control}
                  className={styles.checkbox}
                />
              </div>
            </div>
            <Button
              className={styles.sendBtn}
              variant="contained"
              onClick={handleSubmit(onSubmit)}
              disabled={params.id ? !isDirty && !fileInputs : false}
              type="submit"
            >
              {params.id ? 'Editar' : 'Agregar'}
            </Button>
          </form>
        </>
      )}
    </>
  );
};

export default ProductForm;
