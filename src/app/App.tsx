import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import ModalProvider from '../context/modal/ModalProvider';

export default function App() {
  return (
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  );
}
