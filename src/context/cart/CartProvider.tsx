import { useReducer, type ReactNode } from 'react';
import { CartContext } from './CartContext';

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

      return { items: updatedItems };
    }

    case 'clear-cart': {
      return { items: [] };
    }
    default:
      return state;
  }
}

export default function CartProvider({ children }: CartProviderProps) {
  const [cart, dispatch] = useReducer(reducer, {
    items: [],
  });

  console.log(cart);

  const cartItemsCount = cart.items.length;

  const cartItemsTotal = cart.items.reduce((total: number, item: CartItem) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{ cart, dispatch, cartItemsCount, cartItemsTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}
