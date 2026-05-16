import { type ReactNode } from 'react';
import { useToggle } from '../../hooks/useToggle';
import { ModalContext } from './ModalContext';

type ModalProviderProps = {
  children: ReactNode;
};

export default function ModalProvider({ children }: ModalProviderProps) {
  const { isOpen, toggleOpen } = useToggle();
  return (
    <ModalContext.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </ModalContext.Provider>
  );
}
