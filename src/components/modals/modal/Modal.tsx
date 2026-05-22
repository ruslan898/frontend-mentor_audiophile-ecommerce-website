import { useEffect, type ReactNode } from 'react';
import styles from './Modal.module.scss';
import { useCartContext } from '../../../context/cart/CartContext';
import type { ModalVariant } from '../../../context/modal/ModalProvider';

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
  variant: ModalVariant;
};

export default function Modal({
  children,
  isOpen,
  closeModal,
  variant,
}: ModalProps) {
  const { dispatch } = useCartContext();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const checkoutModal = variant === 'center';

  return (
    <div
      className={styles.overlay}
      onClick={() => {
        closeModal();
        if (checkoutModal) {
          dispatch({ type: 'clear-cart' });
        }
      }}
    >
      <div className="container">
        <div className={styles.modalWrapper}>
          <div
            className={`${styles.modal} ${styles[variant]}`}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
