import { useEffect, type ReactNode } from 'react';
import styles from './Modal.module.scss';
import type { ModalVariant } from '../../../context/modal/ModalProvider';

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
  variant: ModalVariant;
  onOverlayClick?: () => void;
};

export default function Modal({
  children,
  isOpen,
  closeModal,
  variant,
  onOverlayClick,
}: ModalProps) {
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
        if (checkoutModal && onOverlayClick) {
          onOverlayClick();
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
