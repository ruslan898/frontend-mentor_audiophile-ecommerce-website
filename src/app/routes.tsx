import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import Category from '../pages/Category';
import ProductDetail from '../pages/ProductDetail';
import Checkout from '../pages/Checkout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'category/:type',
        element: <Category />,
      },
      {
        path: 'product-detail/:id',
        element: <ProductDetail />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
    ],
  },
]);
