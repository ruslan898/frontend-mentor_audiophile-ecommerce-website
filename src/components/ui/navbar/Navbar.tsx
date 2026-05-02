import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Navbar.module.scss';

type NavbarProps = {
  className?: string
}

export default function Navbar({ className }: NavbarProps) {
  const classes = clsx(styles.navbar, className);

  return (
    <nav>
      <ul className={classes}>
        <li>
          <Link to="/" className={styles.navbarItem}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/category/headphones" className={styles.navbarItem}>
            Headphones
          </Link>
        </li>
        <li>
          <Link to="/category/speakers" className={styles.navbarItem}>
            Speakers
          </Link>
        </li>
        <li>
          <Link to="/category/earphones" className={styles.navbarItem}>
            Earphones
          </Link>
        </li>
      </ul>
    </nav>
  );
}
