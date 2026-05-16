import { createContext, useContext } from 'react';
import type { UseToggleType } from '../../hooks/useToggle';

export const ModalContext = createContext<UseToggleType | null>(null);


export const useModalContext = () => {
  const context = useContext(ModalContext);

   if (!context) {
     throw new Error('useModal must be used within ModalProvider');
   }

  return context
};