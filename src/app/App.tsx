import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import ModalProvider from '../context/modal/ModalProvider';
import CartProvider from '../context/cart/CartProvider';

export default function App() {
  return (
    <CartProvider>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </CartProvider>
  );
}
