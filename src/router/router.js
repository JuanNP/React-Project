import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/login/login'
import {Home} from '../pages/home/home'
import {Transferencias} from '../pages/transferencias/transferencias'

export const ROUTER = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/dashboard',
      element: <Home />,
    },
    {
      path: '/transferencias',
      element: <Transferencias />,
    }
]);