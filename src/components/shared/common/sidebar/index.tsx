import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { Button } from '@mui/material';

import { logoutUser } from 'src/redux/auth/actions';
import { AppDispatch } from 'src/redux/store';

import styles from './sidebar.module.css';
import { SidebarProps } from './types';

const Sidebar = (props: SidebarProps): JSX.Element => {
  const dispatch: AppDispatch<null> = useDispatch();
  return (
    <aside className={styles.aside}>
      <div className={styles.container}>
        <div className={styles.sidebarTitle}>
          <p>{props.title}</p>
        </div>
        <nav className={styles.navList}>
          <ul>
            {props.links.map((link, index) => {
              return (
                <NavLink
                  to={link.title === 'Volver a QIRA' ? link.link : props.baseUrl + link.link}
                  key={index}
                >
                  {link.title === 'Volver a QIRA' ? (
                    <li className={styles.arrowTab}>
                      <ArrowBack className={styles.iconArrow} />
                      {link.title}
                    </li>
                  ) : (
                    <li>{link.title}</li>
                  )}
                </NavLink>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className={styles.sidebarFooter}>
        <Button variant="outlined" color="secondary" onClick={() => dispatch(logoutUser())}>
          Cerrar sesión
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
