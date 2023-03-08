import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/login/login'
import {Home} from '../pages/home/home'
import {Transferencias} from '../pages/transferencias/transferencias'
import {Pagos} from '../pages/pagos/pagos'
import {Beneficiarios} from '../pages/beneficiarios/beneficiarios'
import {Perfil} from '../pages/perfil/perfil'

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
    },
    {
      path: '/pagos',
      element: <Pagos />,
    },
    {
      path: '/beneficiarios',
      element: <Beneficiarios />,
    },
    {
      path: '/perfil',
      element: <Perfil />,
    }
]);