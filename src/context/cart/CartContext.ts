import { createContext, useContext } from 'react';
import type { CartContextValue } from './CartProvider';

export const CartContext = createContext<CartContextValue | null>(null);

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }

  return context;
};
