import React from 'react';
import { useDispatch } from 'react-redux';

import { openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { AppDispatch } from 'src/redux/store';

import styles from './header.module.css';

const Header = () => {
  const dispatch: AppDispatch<null> = useDispatch();

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.brand}>Radium Rocket</div>
        <div className={styles.brand}>SHOW_ENV: {process.env.REACT_APP_SHOW_ENV}</div>
        <div>
          <a href="https://www.facebook.com/radiumrocket" target="_blank" rel="noreferrer">
            <img
              className={styles.socialIcon}
              src={`${process.env.PUBLIC_URL}/assets/images/facebook.svg`}
            />
          </a>
          <a href="https://twitter.com/radiumrocket" target="_blank" rel="noreferrer">
            <img
              className={styles.socialIcon}
              src={`${process.env.PUBLIC_URL}/assets/images/twitter.svg`}
            />
          </a>
          <a href="https://www.instagram.com/radium.rocket/" target="_blank" rel="noreferrer">
            <img
              className={styles.socialIcon}
              src={`${process.env.PUBLIC_URL}/assets/images/instagram.svg`}
            />
          </a>
        </div>
      </div>
      <nav className={styles.navbar}>
        <a className={styles.appName} href="/">
          Qira
        </a>
        <ul className={styles.routes}>
          <li>
            <a onClick={() => dispatch(openModal(ModalTypes.LOGIN))}>login</a>
          </li>
          <li>
            <a href="/storybook">Storybook</a>
          </li>
          <li>
            <a href="/admin">Admin</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
