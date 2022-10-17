import React from 'react';

import { LoginForm } from 'src/components/login';

import styles from './login.module.css';

const Login = () => {
  return (
    <section className={styles.container}>
      <div>
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
