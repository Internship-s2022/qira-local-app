import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { login } from 'src/redux/auth/thunks';
import { AppDispatch } from 'src/redux/store';
import { capitalizeFirstLetter } from 'src/utils/formatters';

import styles from './login.module.css';

const Login = () => {
  const dispatch: AppDispatch<null> = useDispatch();

  useEffect(() => {
    const user = {
      email: 'admin@qira.com',
      password: 'admin1234',
    };
    dispatch(login(user));
  }, []);

  return (
    <section className={styles.container}>
      <h2>{capitalizeFirstLetter('login')}</h2>
    </section>
  );
};

export default Login;
