import ReactDOM from 'react-dom/client';
import App from './routes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Catalog from './routes/catalog';
import MainContent from './routes/main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'main',
        element: <MainContent />,
      },
      {
        path: 'catalog',
        element: <Catalog />,
        children: [
          {
            path: 'painting',
          },
          {
            path: 'graphics',
          },
          {
            path: 'artists',
          },
          {
            path: 'photography',
          },
          {
            path: 'digital',
          },
          {
            path: 'prints',
          },
          {
            path: 'styles',
          },
        ],
      },
      { path: 'pricing' },
      { path: 'consultation' },
      { path: 'news' },
      { path: ':artId' },
      { path: 'cart' },
      {
        path: 'profile',
        children: [
          {
            path: 'main',
          },
          { path: 'subscription' },
          { path: 'on-sale' },
          { path: 'purchases' },
          { path: 'favorite-artists' },
          { path: 'favorites' },
          { path: 'payment-methods' },
          { path: 'settings' },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}></RouterProvider>
);
