import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { ArrowDropDownOutlined, ArrowLeftOutlined } from '@mui/icons-material';

import { logout } from 'src/redux/auth/thunks';
import * as thunksCategories from 'src/redux/category/thunk';
import { closeModal, openModal } from 'src/redux/modal/actions';
import { ModalTypes } from 'src/redux/modal/types';
import { closeSidebar } from 'src/redux/sidebar/actions';
import { AppDispatch, RootState } from 'src/redux/store';
import { UserRole } from 'src/types';

import styles from './sidebar-home.module.css';
import { propsSidebar } from './types';

const SidebarHome = (props: propsSidebar): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  const location = useLocation();
  const categories = useSelector((state: RootState) => state.categories.categories);
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const role = useSelector((state: RootState) => state.auth.role);

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
                  location.pathname.includes('profile') ? (
                    <span className={styles.options} onClick={() => dispatch(closeSidebar())}>
                      <Link className={styles.linkProfile} to="/">
                        Ir al inicio
                      </Link>
                    </span>
                  ) : (
                    <span className={styles.options} onClick={() => dispatch(closeSidebar())}>
                      <Link className={styles.linkProfile} to="/profile/my-orders">
                        Ir a mi perfil
                      </Link>
                    </span>
                  )
                ) : (
                  <>
                    <span
                      className={styles.options}
                      onClick={() => dispatch(openModal(ModalTypes.LOGIN))}
                      data-testid="login-btn"
                    >
                      Iniciar sesión
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
                        <Link
                          className={
                            location.pathname === `/category/${category.url}`
                              ? styles.linkSelected
                              : styles.linksCategories
                          }
                          to={`/category/${category.url}`}
                        >
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {role && role === UserRole.CLIENT && (
                <div className={styles.clientLinks} onClick={() => dispatch(closeSidebar())}>
                  <span className={styles.options}>
                    <Link
                      className={
                        location.pathname === '/profile/my-orders'
                          ? styles.linkSelected
                          : styles.linkProfile
                      }
                      to="/profile/my-orders"
                    >
                      Mis pedidos
                    </Link>
                  </span>
                  <span className={styles.options}>
                    <Link
                      className={
                        location.pathname === '/profile/bill-information'
                          ? styles.linkSelected
                          : styles.linkProfile
                      }
                      to="/profile/bill-information"
                    >
                      Datos de facturación
                    </Link>
                  </span>
                  <span className={styles.options}>
                    <Link
                      className={
                        location.pathname === '/profile/user-data'
                          ? styles.linkSelected
                          : styles.linkProfile
                      }
                      to="/profile/user-data"
                    >
                      Datos de usuario
                    </Link>
                  </span>
                </div>
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
                          dispatch(closeSidebar());
                        },
                        onCloseCallback: () => {
                          dispatch(closeModal());
                          dispatch(closeSidebar());
                        },
                      }),
                    )
                  }
                >
                  {currentUser?.businessName ? (
                    <span className={styles.options}> Cerrar sesión</span>
                  ) : (
                    <></>
                  )}
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
