import { useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Modal.module.scss';

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  variant: 'dropdown' | 'center';
};

export default function Modal({
  children,
  isOpen,
  onToggle,
  variant = 'dropdown',
}: ModalProps) {
  const path = useLocation().pathname;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const modalWrapperClasses = clsx(
    styles.modalWrapper,
    path === '/' && styles.modalWrapperHome,
  );

  return (
    <div className={styles.overlay} onClick={onToggle}>
      <div className="container">
        <div className={modalWrapperClasses}>
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
