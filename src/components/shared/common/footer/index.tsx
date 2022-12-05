import React from 'react';
import { WhatsApp } from '@mui/icons-material';

import styles from './footer.module.css';

const Footer = () => {
  return (
    <>
      <a
        className={styles.wspIconContainer}
        href="https://wa.me/5493412115850?text=Hola,%20me%20gustaria%20realizar%20una%20consulta"
        target="_blank"
        rel="noreferrer"
      >
        <WhatsApp className={styles.wspIcon} />
      </a>
      <footer className={styles.container} data-testid="test">
        <div className={styles.footerContainer}>
          <div className={styles.logoContainer}>
            <img
              className={styles.logo}
              src={`${process.env.PUBLIC_URL}/assets/images/logo-qira.png`}
            />
            <span className={styles.license}>© 2022 QIRA. Todos los derechos reservados.</span>
          </div>
          <div className={styles.socialMediaContainer}>
            <span className={styles.titelSocialMedia}>Seguinos en nuestras redes</span>
            <div className={styles.socialMedia}>
              <a href="https://www.facebook.com/qira-local" target="_blank" rel="noreferrer">
                <img
                  className={styles.socialIcon}
                  src={`${process.env.PUBLIC_URL}/assets/images/social-media/facebook-icon.png`}
                />
              </a>
              <a href="https://www.instagram.com/qira-local" target="_blank" rel="noreferrer">
                <img
                  className={styles.socialIcon}
                  src={`${process.env.PUBLIC_URL}/assets/images/social-media/instagram-icon.png`}
                />
              </a>
              <a href="https://twitter.com/radiumrocket" target="_blank" rel="noreferrer">
                <img
                  className={styles.socialIcon}
                  src={`${process.env.PUBLIC_URL}/assets/images/social-media/twitter-icon.png`}
                />
              </a>
              <a href="https://www.linkedin.com/qira-local" target="_blank" rel="noreferrer">
                <img
                  className={styles.socialIcon}
                  src={`${process.env.PUBLIC_URL}/assets/images/social-media/linkedin-icon.png`}
                />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <img
                  className={styles.socialIcon}
                  src={`${process.env.PUBLIC_URL}/assets/images/social-media/whatsapp-icon.png`}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
