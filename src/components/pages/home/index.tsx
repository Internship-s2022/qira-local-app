import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCategory } from 'src/redux/category/thunk';
import { getProducts } from 'src/redux/products/thunk';
import { AppDispatch } from 'src/redux/store';

import styles from './home.module.css';

const Home = (): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getProducts());
  }, []);

  return (
    <section className={styles.container}>
      <h2>Home screen</h2>
    </section>
  );
};

export default Home;
