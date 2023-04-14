import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/login/login'
import { Home } from '../pages/home/home'
import { Transferencias } from '../pages/transferencias/transferencias'
import { Transacciones } from '../pages/transacciones/transacciones'
import { Beneficiarios } from '../pages/beneficiarios/beneficiarios'
import { Perfil } from '../pages/perfil/perfil'
import Layout from '../Components/Layout/Layout';

import ChooseUserName from '../pages/login/chooseUserName'
import SignOut from '../Components/signout';

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
        path: 'transacciones',
        element: <Transacciones />,
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
    },
    {
      path: 'choose-username',
      element: <ChooseUserName />,
    },
    {
      path: 'signout',
      element: <SignOut  />,
    },
]);