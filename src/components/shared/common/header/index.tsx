import React, { OptionHTMLAttributes, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { getCategoriesAsOptions } from 'src/redux/category/selectors/getCategoryAsOptions';
import * as thunks from 'src/redux/category/thunk';
import { openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { AppDispatch, RootState } from 'src/redux/store';

import { SharedSelect } from '../../ui/select';
// import { Options } from '../../ui/select/types';
import styles from './header.module.css';

const Header = () => {
  const dispatch: AppDispatch<null> = useDispatch();
  const categories = useSelector((state: RootState) => state.categories.categories);
  // const options = getCategoriesAsOptions(categories);
  // const categoryOptions
  // const [categoryOptions, setCategoryOptions] = useState<Options[]>();
  const { control } = useForm({});

  useEffect(() => {
    dispatch(thunks.getCategory());
  }, []);

  // useEffect(() => {
  //   if (categories.length) {
  //     categories.map((category) =>
  //       setCategoryOptions({ key: `${category.name}`, value: category.name }),
  //     );
  //   }
  // }, [categories]);

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
        <div>
          <SharedSelect
            control={control}
            name="Categories"
            margin="dense"
            size="medium"
            options={[]}
          />
        </div>
        <ul className={styles.routes}>
          <li>
            <a onClick={() => dispatch(openModal(ModalTypes.LOGIN))}>login</a>
          </li>
          <li>
            <a onClick={() => dispatch(openModal(ModalTypes.REGISTER_FORM))}>Sign up</a>
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
