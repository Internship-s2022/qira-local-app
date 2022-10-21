import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './sidebar.module.css';
import { SidebarProps } from './types';

const Sidebar = (props: SidebarProps): JSX.Element => {
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
                <NavLink to={props.baseUrl + link.link} key={index}>
                  <li>{link.title}</li>
                </NavLink>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className={styles.sidebarFooter}>
        <p>{props.bottomText}</p>
      </div>
    </aside>
  );
};

export default Sidebar;
