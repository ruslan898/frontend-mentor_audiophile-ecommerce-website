import { useState, type ReactNode } from 'react';
import { useToggle } from '../../hooks/useToggle';
import { ModalContext } from './ModalContext';

type ModalProviderProps = {
  children: ReactNode;
};

export type ModalContextType = {
  isOpen: boolean;
  closeModal: () => void;
  openModal: (variant: ModalVariant) => void;
  variant: ModalVariant;
};

export type ModalVariant = 'dropdown' | 'center';

export default function ModalProvider({ children }: ModalProviderProps) {
  const { isOpen, toggleOpen } = useToggle();
  const [variant, setVariant] = useState<ModalVariant>('dropdown');

  function closeModal() {
    toggleOpen();
  }

  function openModal(variant: ModalVariant) {
    setVariant(variant);
    toggleOpen();
  }

  return (
    <ModalContext.Provider value={{ isOpen, closeModal, openModal, variant }}>
      {children}
    </ModalContext.Provider>
  );
}
