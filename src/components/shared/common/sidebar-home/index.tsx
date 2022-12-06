import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ArrowDropDownOutlined, ArrowLeftOutlined } from '@mui/icons-material';

import { logout } from 'src/redux/auth/thunks';
import * as thunksCategories from 'src/redux/category/thunk';
import { closeModal, openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { closeSidebar } from 'src/redux/sidebar/actions';
import { AppDispatch, RootState } from 'src/redux/store';

import styles from './sidebar-home.module.css';
import { propsSidebar } from './types';

const SidebarHome = (props: propsSidebar): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const categories = useSelector((state: RootState) => state.categories.categories);
  const currentUser = useSelector((state: RootState) => state.auth.user);

  const [showList, setShowList] = useState<boolean>(false);
  useEffect(() => {
    dispatch(thunksCategories.getPublicCategories());
  }, []);
  if (!props.isOpen) {
    return <></>;
  }
  return (
    <div onClick={() => dispatch(closeSidebar())} className={styles.asideContainer}>
      <aside onClick={(e) => e.stopPropagation()} className={styles.aside}>
        <div className={styles.container}>
          <nav className={styles.navList}>
            <ul className={styles.sidebarList}>
              <li>
                {currentUser?.email ? (
                  <span className={styles.options}>
                    <Link className={styles.linkProfile} to="/profile/my-orders">
                      Ir a mi perfil
                    </Link>
                  </span>
                ) : (
                  <>
                    <span
                      className={styles.options}
                      onClick={() => dispatch(openModal(ModalTypes.LOGIN))}
                      data-testid="login-btn"
                    >
                      Iniciar Sesión
                    </span>
                  </>
                )}
              </li>
              <li>
                <div className={styles.categoriesContainer} onClick={() => setShowList(!showList)}>
                  <span className={styles.options}>Categorias</span>
                  {showList ? <ArrowDropDownOutlined /> : <ArrowLeftOutlined />}
                </div>
              </li>
              {showList && (
                <>
                  <ul className={styles.categoriesList}>
                    {categories.map((category, index) => (
                      <li key={index} onClick={() => dispatch(closeSidebar())}>
                        <Link className={styles.linksCategories} to={`/category/${category.url}`}>
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <li>
                <div
                  onClick={() =>
                    dispatch(
                      openModal(ModalTypes.CONFIRM, {
                        message: '¿Está seguro de que desea cerrar sesión?',
                        onConfirmCallback: () => {
                          dispatch(logout());
                          dispatch(closeModal());
                        },
                        onCloseCallback: () => dispatch(closeModal()),
                      }),
                    )
                  }
                >
                  <span className={styles.options}> Cerrar sesión</span>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default SidebarHome;
