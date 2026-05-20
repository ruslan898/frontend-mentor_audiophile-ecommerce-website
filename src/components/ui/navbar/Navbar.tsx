import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Navbar.module.scss';

type NavbarProps =
  | {
      variant: 'header';
      className?: string;
    }
  | {
      variant: 'burgerMenu';
      className?: string;
      onClick: () => void;
    };

export default function Navbar(props: NavbarProps) {
  const { variant, className } = props;
  const classes = clsx(styles.navbar, className);

  const navigate = useNavigate();

  return (
    <nav>
      <ul className={classes}>
        <li>
          {variant === 'header' ? (
            <Link to="/" className={styles.navbarItem}>
              Home
            </Link>
          ) : (
            <button
              className={styles.navbarItem}
              onClick={() => {
                navigate('/');
                props.onClick();
              }}
            >
              Home
            </button>
          )}
        </li>
        <li>
          {variant === 'header' ? (
            <Link to="/category/headphones" className={styles.navbarItem}>
              Headphones
            </Link>
          ) : (
            <button
              className={styles.navbarItem}
              onClick={() => {
                navigate('/category/headphones');
                props.onClick();
              }}
            >
              Headphones
            </button>
          )}
        </li>
        <li>
          {variant === 'header' ? (
            <Link to="/category/speakers" className={styles.navbarItem}>
              Speakers
            </Link>
          ) : (
            <button
              className={styles.navbarItem}
              onClick={() => {
                navigate('/category/speakers');
                props.onClick();
              }}
            >
              Speakers
            </button>
          )}
        </li>
        <li>
          {variant === 'header' ? (
            <Link to="/category/earphones" className={styles.navbarItem}>
              Earphones
            </Link>
          ) : (
            <button
              className={styles.navbarItem}
              onClick={() => {
                navigate('/category/earphones');
                props.onClick();
              }}
            >
              Earphones
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}
