import Home from './pages/Home.jsx';
import Layout from './components/Layout/Layout.jsx';
import About from './pages/About.jsx';
import { createBrowserRouter } from 'react-router-dom';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import NotFound from './pages/NotFound.jsx';
import Contact from './pages/Contact.jsx'
import Account from './pages/Account.jsx'
import Wishlist from './pages/Wishlist.jsx';
import Service from './pages/Service.jsx';
import Practic from './pages/Practic.jsx';
import Smartphone from './pages/Smartphone.jsx';
import Cart from './pages/Cart.jsx'
export const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: 'account',
        element: <Account />
      },
      {
        path: 'wishlist',
        element: <Wishlist />
      },
      {
        path: 'service',
        element: <Service />
      },
      {
        path: 'practic',
        element: <Practic />
      },
      {
        path: 'smartphone',
        element: <Smartphone />
      },
      {
        path: 'cart',
        element: <Cart />
      },
    ],
  },
]);
