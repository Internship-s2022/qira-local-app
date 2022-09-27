import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { resetStore } from 'src/redux/test/actions';

import styles from './home.module.css';

const Home = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetStore());
  }, []);

  return (
    <section className={styles.container}>
      <h2>Home screen</h2>
    </section>
  );
};

export default Home;
