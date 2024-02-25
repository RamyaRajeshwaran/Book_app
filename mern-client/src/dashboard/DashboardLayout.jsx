import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidepage from './Sidepage';

const DashboardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
        <Sidepage />
      <Outlet />
    </div>
  )
}

export default DashboardLayout
