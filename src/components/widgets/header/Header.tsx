import { Link, useLocation } from 'react-router-dom';
import { useWindowWidth } from '../../../hooks/useWindowWidth';
import styles from './Header.module.scss';
import logoIcon from '/assets/shared/desktop/logo.svg';
import cartIcon from '/assets/shared/desktop/icon-cart.svg';
import Navbar from '../../ui/navbar/Navbar';
import { useModalContext } from '../../../context/modal/ModalContext';
import { useCartContext } from '../../../context/cart/CartContext';
import BurgerMenu from '../burgerMenu/BurgerMenu';
import { useToggle } from '../../../hooks/useToggle';

export default function Header() {
  const windowWidth = useWindowWidth();
  const path = useLocation().pathname;

  const { toggleOpen } = useModalContext();
  const { cartItemsCount } = useCartContext();

  const {isOpen: burgerOpen, toggleOpen: toggleBurger} = useToggle()

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          {windowWidth < 1024 && (
            <button
              type="button"
              className={styles.burgerMenuBtn}
              aria-label="Open burger menu"
              onClick={toggleBurger}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}

          <Link to="/" aria-label="Go to the homepage">
            <img src={logoIcon} alt="Logo" className={styles.logoImg} />
          </Link>

          {windowWidth >= 1024 && <Navbar variant='header' />}

          <button
            type="button"
            className={styles.cartBtn}
            aria-label="Open cart"
            onClick={toggleOpen}
          >
            <img src={cartIcon} alt="Cart" className={styles.cartImg} />
            {cartItemsCount > 0 && (
              <div className={styles.cartItemsCount}>{cartItemsCount}</div>
            )}
          </button>
          {path === '/' ||
            (path.includes('category') && (
              <div className={styles.divider}></div>
            ))}
        </div>
      </div>
      <BurgerMenu isOpen={burgerOpen} onToggle={toggleBurger} />
    </header>
  );
}
