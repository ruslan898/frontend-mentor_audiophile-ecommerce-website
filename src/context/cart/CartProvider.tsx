import { useReducer, type ReactNode } from 'react';
import { CartContext } from './CartContext';
import {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from '../../utils/utils';

type CartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export type CartContextValue = {
  cart: Cart;
  dispatch: React.Dispatch<Action>;
  cartItemsCount: number;
  cartItemsTotal: number;
  SHIPPING_PRICE: number;
  vatValue: string;
  grandTotal: string;
};

export type Cart = {
  items: CartItem[] | [];
};

export type Action =
  | { type: 'add-item'; payload: { item: CartItem; quantity: number } }
  | {
      type: 'upd-item-qty';
      payload: { id: number; variant: 'incr' | 'decr' };
    }
  | { type: 'clear-cart' };

function reducer(state: Cart, action: Action): Cart {
  switch (action.type) {
    case 'add-item': {
      const { item, quantity } = action.payload;
      const existing = state.items.find((cartItem) => cartItem.id === item.id);
      const updatedItems = existing
        ? state.items.map((cartItem) => {
            if (cartItem.id === existing.id) {
              return { ...cartItem, quantity: cartItem.quantity + quantity };
            } else {
              return cartItem;
            }
          })
        : [...state.items, item];
      saveDataToLocalStorage('cart', updatedItems);
      return { items: updatedItems };
    }

    case 'upd-item-qty': {
      const { id, variant } = action.payload;

      const updatedItems = state.items
        .map((cartItem) => {
          if (cartItem.id === id) {
            return variant === 'incr'
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : { ...cartItem, quantity: cartItem.quantity - 1 };
          } else {
            return cartItem;
          }
        })
        .filter((cartItem) => cartItem.quantity > 0);
      saveDataToLocalStorage('cart', updatedItems);

      return { items: updatedItems };
    }

    case 'clear-cart': {
      localStorage.removeItem('cart');
      return { items: [] };
    }
    default:
      return state;
  }
}

export default function CartProvider({ children }: CartProviderProps) {
  const [cart, dispatch] = useReducer(reducer, {
    items: getDataFromLocalStorage('cart') ?? [],
  });

  const cartItemsCount = cart.items.length;

  const cartItemsTotal = cart.items.reduce((total: number, item: CartItem) => {
    return total + item.price * item.quantity;
  }, 0);

  const VAT = 0.2;
  const SHIPPING_PRICE = cartItemsCount > 0 ? 50 : 0;
  const vatValue = Math.round(cartItemsTotal * VAT).toLocaleString('en-US');
  const grandTotal = (cartItemsTotal + SHIPPING_PRICE).toLocaleString('en-US');

  return (
    <CartContext.Provider
      value={{
        cart,
        dispatch,
        cartItemsCount,
        cartItemsTotal,
        SHIPPING_PRICE,
        vatValue,
        grandTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
