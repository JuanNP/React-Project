import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/login/login'
import {Home} from '../pages/home/home'

export const ROUTER = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
        path: '/home',
        element: <Home />,
    }
]);