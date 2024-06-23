import ReactDOM from 'react-dom/client';
import App from './routes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Catalog from './routes/catalog';
import Main from './routes/main';
import Art from './routes/art';
import News from './routes/news';
import Consultation from './routes/consultation';
import Cart from './routes/cart';
import Profile from './routes/profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />,
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
      { path: 'consultation', element: <Consultation /> },
      { path: 'news', element: <News /> },
      { path: ':artId', element: <Art /> },
      { path: 'cart', element: <Cart /> },
      {
        path: 'profile',
        element: <Profile />,
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
