import React from 'react'
import { Outlet } from 'react-router-dom';
import TopBar from '../Navbar/Navbar';
import { ResponseSideBar } from '../Sidebar/Sidebar';

const Layout = ({children}) => {
  return (
    <React.Fragment>
        <TopBar></TopBar>
        <ResponseSideBar></ResponseSideBar>
        <Outlet />
    </React.Fragment>
  )
}

export default Layout