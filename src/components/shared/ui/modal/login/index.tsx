import Joi from 'joi';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { joiResolver } from '@hookform/resolvers/joi';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button, InputAdornment } from '@mui/material';

import { login } from 'src/redux/auth/thunks';
import { Actions as AuthActions } from 'src/redux/auth/types';
import { AppDispatch } from 'src/redux/store';

import { InputText } from '../../input';
import styles from './login.module.css';
import { FormValues, LoginModalProps } from './types';

const loginValidation = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(7)
    .required()
    .messages({
      'string.min': 'Invalid Email, it must contain at least 7 characters.',
      'any.required': 'Email is a required field.',
      'string.email': 'Invalid Email, it must be a valid email format',
    }),
  password: Joi.string().alphanum().required().min(8).messages({
    'any.required': 'Password is a required field.',
    'string.min': 'Invalid password, it must contain at least 8 characters.',
  }),
});

export const LoginModal = (props: LoginModalProps) => {
  const dispatch: AppDispatch<null> = useDispatch();
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
    resolver: joiResolver(loginValidation),
  });

  const onSubmit = async (User) => {
    console.log('User: ', User);
    const response = await dispatch(login(User));
    if (response.type === AuthActions.LOGIN_SUCCESS) {
      console.log('success');
      props.onConfirm();
    } else {
      props.onClose();
    }
  };

  return (
    <div className={styles.container}>
      <form>
        <div className={styles.formContainer}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Iniciar sesión</h2>
          </div>
          <InputText
            control={control}
            name="email"
            optionalLabel="Email *"
            variant="outlined"
            margin="dense"
            size="small"
            fullWidth={true}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineIcon style={{ color: '#F05523' }} />
                </InputAdornment>
              ),
            }}
          />
          <InputText
            control={control}
            name="password"
            type="password"
            optionalLabel="Password *"
            variant="outlined"
            margin="dense"
            size="small"
            fullWidth={true}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon style={{ color: '#F05523' }} />
                </InputAdornment>
              ),
            }}
          />
          <Button onClick={handleSubmit(onSubmit)} variant="contained" className={styles.button}>
            Iniciar sesión
          </Button>
        </div>
      </form>
    </div>
  );
};
