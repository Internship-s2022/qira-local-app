import React from 'react';

import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.container} data-testid="test">
      <div className={styles.footerContainer}>
        <div className={styles.logoContainer} data-testid="footer-info">
          <img
            className={styles.logo}
            src={`${process.env.PUBLIC_URL}/assets/images/logo-qira.png`}
          />
          <span className={styles.license}>© 2022 QIRA. Todos los derechos reservados.</span>
        </div>
        <div className={styles.socialMediaContainer} data-testid="social-media">
          <span className={styles.titelSocialMedia}>Seguinos en nuestras redes</span>
          <div className={styles.socialMedia} data-testid="social-icons">
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
  );
};

export default Footer;
