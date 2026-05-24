import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../pages/RootLayout';
import CategoryLayout from '../pages/CategoryLayout';
import Home from '../pages/Home';
import Category from '../pages/Category';
import ProductDetail from '../pages/ProductDetail';
import Checkout from '../pages/Checkout';
import { loader } from '../utils/utils';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    id: 'root-route',
    loader: loader,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'category',
        element: <CategoryLayout />,
        children: [
          {
            path: ':type',
            element: <Category />,
          },
        ],
      },
      {
        path: 'product-detail/:name',
        element: <ProductDetail />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
    ],
  },
]);
