import { useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './MainContent.module.scss';
import Modal from '../../modals/modal/Modal';
import CartModal from '../../modals/cartModal/CartModal';
import CheckoutSuccessModal from '../../modals/checkoutSuccessModal/CheckoutSuccessModal';
import { useModalContext } from '../../../context/modal/ModalContext';

type MainContentProps = {
  children: ReactNode;
};

export default function MainContent({ children }: MainContentProps) {
  const { isOpen, toggleOpen } = useModalContext();
  const path = useLocation().pathname;
  const classes = clsx(
    styles.mainContent,
    (path === '/' || path.includes('category')) && styles.mainContentHome,
  );

  return (
    <main className={classes}>
      {children}
      <Modal isOpen={isOpen} onToggle={toggleOpen} variant="dropdown">
        <CartModal />
      </Modal>
    </main>
  );
}
