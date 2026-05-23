import { useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './MainContent.module.scss';
import Modal from '../../modals/modal/Modal';
import CartModal from '../../modals/cartModal/CartModal';
import CheckoutSuccessModal from '../../modals/checkoutSuccessModal/CheckoutSuccessModal';
import { useModalContext } from '../../../context/modal/ModalContext';
import { useCartContext } from '../../../context/cart/CartContext';

type MainContentProps = {
  children: ReactNode;
};

export default function MainContent({ children }: MainContentProps) {
  const { isOpen, closeModal, variant } = useModalContext();
  const path = useLocation().pathname;
  const classes = clsx(
    styles.mainContent,
    (path === '/' || path.includes('category')) && styles.mainContentHome,
    path === '/checkout' && styles.mainContentCheckout,
  );
  const { dispatch } = useCartContext();

  return (
    <main className={classes}>
      {children}
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        variant={variant}
        onOverlayClick={() => dispatch({ type: 'clear-cart' })}
      >
        {variant === 'dropdown' ? <CartModal /> : <CheckoutSuccessModal />}
      </Modal>
    </main>
  );
}
