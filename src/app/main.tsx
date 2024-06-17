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
      },
      { path: 'appraisal' },
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
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}></RouterProvider>
);
