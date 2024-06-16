import ReactDOM from 'react-dom/client';
import App from './routes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Catalog from './routes/catalog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'main',
      },
      {
        path: 'catalog',
        element: <Catalog />,
      },
      { path: 'appraisal' },
      { path: 'pricing' },
      { path: 'consultation' },
      { path: 'news' },
      { path: ':artId' },
      { path: 'basket' },
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
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}></RouterProvider>
);
