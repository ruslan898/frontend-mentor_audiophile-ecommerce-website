import { Link } from 'react-router-dom';
import { useWindowWidth } from '../../../hooks/useWindowWidth';
import Navbar from '../../ui/navbar/Navbar';
import SocialLinks from '../../ui/socialLinks/SocialLinks';
import logoIcon from '/assets/shared/desktop/logo.svg';
import styles from './Footer.module.scss';

export default function Footer() {
  const windowWidth = useWindowWidth();

  if (windowWidth >= 1024) {
    return (
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerWrapper}>
            <div className={styles.topLine}></div>
            <div className={styles.footerMain}>
              <div className={styles.footerTop}>
                <Link to="/" aria-label="Go to the homepage">
                  <img src={logoIcon} alt="Logo" className={styles.logoImg} />
                </Link>
                <p className={styles.footerText}>
                  Audiophile is an all in one stop to fulfill your audio needs.
                  We're a small team of music lovers and sound specialists who
                  are devoted to helping you get the most out of personal audio.
                  Visit our demo facility - we’re open 7 days a week.
                </p>
              </div>
              <div className={styles.footerBottom}>
                <Navbar className={styles.footerNavbar} />
                <SocialLinks />
              </div>
            </div>
            <p className={styles.copyright}>
              Copyright 2021. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerWrapper}>
          <div className={styles.footerTop}>
            <div className={styles.topLine}></div>
            <Link to="/" aria-label="Go to the homepage">
              <img src={logoIcon} alt="Logo" className={styles.logoImg} />
            </Link>
            <Navbar className={styles.footerNavbar} />
            <p className={styles.footerText}>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Visit
              our demo facility - we’re open 7 days a week.
            </p>
          </div>
          <div className={styles.footerBottom}>
            <p className={styles.copyright}>
              Copyright 2021. All Rights Reserved
            </p>
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}
