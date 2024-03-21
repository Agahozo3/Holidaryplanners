import React from 'react'
import Sidenav from './Sidenav';
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Dashboard from './Dashboard';

const DashboardLayout = () => {
  return (
      <>
        {/* <Sidenav />
        <Header />
       <Outlet /> */}
       <Dashboard/>
      </>
     
      
  )
}

export default DashboardLayout