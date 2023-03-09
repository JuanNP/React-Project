import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/login/login'
import { Home } from '../pages/home/home'
import { Transferencias } from '../pages/transferencias/transferencias'
import { Pagos } from '../pages/pagos/pagos'
import { Beneficiarios } from '../pages/beneficiarios/beneficiarios'
import { Perfil } from '../pages/perfil/perfil'
import Layout from '../Components/Layout/Layout';

export const ROUTER = createBrowserRouter([
  {
    route:"/",
    element: <Layout />,
    children: [
      {
        path: 'dashboard',
        element: <Home />
      },
      {
        path: 'transferencias',
        element:  <Transferencias /> ,
      },
      {
        path: 'pagos',
        element: <Pagos />,
      },
      {
        path: 'beneficiarios',
        element: <Beneficiarios />,
      },
      {
        path: 'perfil',
        element: <Perfil />,
      },
    ]
  },
    {
      path: "*",
      element: <Login />,
    }
]);