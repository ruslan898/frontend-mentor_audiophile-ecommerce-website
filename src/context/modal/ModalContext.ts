import { createContext, useContext } from 'react';
import type { ModalContextType } from './ModalProvider';

export const ModalContext = createContext<ModalContextType | null>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModalContext must be used within ModalProvider');
  }

  return context;
};
