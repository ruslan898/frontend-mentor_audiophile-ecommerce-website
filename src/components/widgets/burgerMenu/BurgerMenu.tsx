import { useEffect } from 'react';
import clsx from 'clsx';
import Navbar from '../../ui/navbar/Navbar';
import styles from './BurgerMenu.module.scss';
import { createPortal } from 'react-dom';

type BurgerMenuProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export default function BurgerMenu({ isOpen, onToggle }: BurgerMenuProps) {
  const menuClasses = clsx(styles.burgerMenu, isOpen && styles.menuOpen);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return createPortal(
    <>
      {isOpen && <div className={styles.overlay} onClick={onToggle}></div>}
      <div className={menuClasses}>
        <Navbar variant='burgerMenu' className={styles.burgerMenuNavbar} onClick={onToggle} />
      </div>
    </>,
    document.body,
  );
}
